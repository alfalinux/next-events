import React from "react";
import Link from "next/link";
import styles from "./EventList.module.css";
import Calendar from "../public/icons/calendar";
import MapPin from "../public/icons/map-pin";
import Button from "./Button";

const EventList = (props) => {
  return (
    <>
      {props.items.map((d) => (
        <div className={styles["container"]} key={d.id}>
          <img className={styles["main-image"]} src={d.image} alt={d.title} />
          <div className={styles["main-content"]}>
            <div className={styles["main-txt"]}>
              <h2>{d.title}</h2>
              <div className={styles["date"]}>
                <span className={styles["icon"]}>
                  <Calendar />
                </span>
                <h4>
                  {new Date(d.date)
                    .toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .toString()}
                </h4>
              </div>
            </div>
            <div className={styles["action"]}>
              <Link href={"/events/" + d.id}>
                <Button color="primary">Detail Event</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventList;
