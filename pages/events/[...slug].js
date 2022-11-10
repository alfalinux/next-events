import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../components/EventList";

const EventFilteredPage = (props) => {
  const event = props.events;
  return (
    <>
      <h1 className="center">{`Events in ${new Date(event[0].date)
        .toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })
        .toString()}`}</h1>

      <EventList items={event} />
    </>
  );
};

export default EventFilteredPage;

export async function getServerSideProps(context) {
  const response = await fetch("https://nextjs-course-a5809-default-rtdb.firebaseio.com/events.json");

  const data = await response.json();

  const allEvents = [];

  for (const key in data) {
    allEvents.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      date: data[key].date,
    });
  }

  const filteredEvents = allEvents
    .filter((d) => new Date(d.date).getFullYear().toString() === context.params.slug[0])
    .filter((d) => (new Date(d.date).getMonth() + 1).toString() === context.params.slug[1]);

  return {
    props: {
      events: filteredEvents,
    },
  };
}
