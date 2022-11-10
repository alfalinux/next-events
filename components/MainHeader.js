import Link from "next/link";
import React from "react";
import styles from "./MainHeader.module.css";
import Document from "../public/icons/document";

const MainHeader = () => {
  return (
    <nav className={styles["container"]}>
      <Link href="/">
        <div className={styles["nav-logo"]}>
          <span className={styles["icon"]}>
            <Document />
          </span>
          <h1>NEXTEVENTS</h1>
        </div>
      </Link>
      <ul className={styles["nav-menu"]}>
        <Link href="/events">
          <li className={styles["nav-list"]}>Browse All Events</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MainHeader;
