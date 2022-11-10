import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../components/EventList";
import FilteredEvents from "../../components/FilteredEvents";

const EventsPage = (props) => {
  const event = props.events;
  return (
    <>
      <FilteredEvents />
      <EventList items={event} />
    </>
  );
};

export default EventsPage;

export async function getServerSideProps() {
  const response = await fetch("https://nextjs-course-a5809-default-rtdb.firebaseio.com/events.json");

  const data = await response.json();

  const featuredEvents = [];

  for (const key in data) {
    featuredEvents.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      date: data[key].date,
    });
  }

  return {
    props: {
      events: featuredEvents,
    },
  };
}
