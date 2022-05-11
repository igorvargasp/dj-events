/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "@/styles/EventItem.module.css";

function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <img
          alt="seila"
          width={170}
          height={100}
          src={evt.image ? evt.image : "/images/event-default.png"}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}

export default EventItem;
