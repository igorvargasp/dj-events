import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "./../../components/EventItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.data.length === 0 && <h3>No events to show</h3>}
      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
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
