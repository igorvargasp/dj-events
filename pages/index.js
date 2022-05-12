import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "./../components/EventItem";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>

      {events.data.length === 0 && <h3>No events to show</h3>}
      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.data.length > 0 && (
        <Link href={"/events"}>
          <a className="btn secondary">View All events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?_sort=date:ASC&_limit=3&populate=*`
  );
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
