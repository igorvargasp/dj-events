/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "@/styles/EventItem.module.css";

function EventItem({ evt }) {
  const { date, time, name, slug, image } = evt.attributes;
  return (
    <div className={styles.event}>
      {console.log(image.data.attributes.formats.thumbnail.url)}
      <div className={styles.img}>
        <img
          alt="seila"
          width={170}
          height={100}
          src={
            image
              ? image.data.attributes.formats.thumbnail.url
              : "/images/event-default.png"
          }
        />
      </div>
      <div className={styles.info}>
        <span>
          {date} at {time}
        </span>
        <h3>{name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}

export default EventItem;
