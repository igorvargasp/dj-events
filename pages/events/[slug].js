/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function EventPage({ evt }) {
  const {
    name,
    date,
    time,
    performers,
    description,
    address,
    venue,
    image: {
      data: {
        attributes: {
          formats: {
            medium: { url },
          },
        },
      },
    },
  } = evt.attributes;
  const deleteEvent = (e) => {
    console.log("event");
  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />
              Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
      </div>
      <div>
        <span>
          {new Date(date).toLocaleDateString("en-US")} at {time}
        </span>
        <h1>{name}</h1>
        {url && (
          <div className={styles.image}>
            <img src={url} width={960} height={600} alt="naosei" />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{performers}</p>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Venue: {venue}</h3>
        <p>{address}</p>
        <Link href="/events">
          <a className={styles.back}> Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events/?populate=*`);
  const events = await res.json();
  const paths = events.data.map((evt) => ({
    params: { slug: evt.attributes.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?slug=${slug}&populate=*`);
  const events = await res.json();

  return {
    props: { evt: events.data[0] },
    revalidate: 1,
  };
}
