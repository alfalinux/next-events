import React from "react";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../components/EventList";
import Newsletter from "../components/Newsletter";

const submitEmail = (val) => {
  return val;
};

const HomePage = (props) => {
  const featuredEvents = props.events.filter((d) => d.isFeatured === true);
  return (
    <>
      <Newsletter onAddEmail={submitEmail} />
      <EventList items={featuredEvents} />;
    </>
  );
};

export default HomePage;

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
