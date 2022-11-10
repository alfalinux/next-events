import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import styles from "../../styles/EventDetailPage.module.css";
import Calendar from "../../public/icons/calendar";
import MapPin from "../../public/icons/map-pin";

const EventDetailPage = (props) => {
  const event = props.events;
  return (
    <div className={styles["container"]}>
      <img className={styles["img"]} src={event.image} />
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>{event.title}</h1>
        <div className={styles["date"]}>
          <span className={styles["icon"]}>
            <Calendar />
          </span>
          <p className={styles["date-txt"]}>{event.date}</p>
        </div>
        <div className={styles["address"]}>
          <span className={styles["icon"]}>
            <MapPin />
          </span>
          <p className={styles["address-txt"]}>{event.location}</p>
        </div>
        <div className={styles["description"]}>
          <p className={styles["decscription-txt"]}>{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;

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

  const featuredEvents = allEvents.find((d) => d.id === context.params.id);

  return {
    props: {
      events: featuredEvents,
    },
  };
}
