import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import styles from "./FilteredEvents.module.css";

const FilteredEvents = () => {
  const [year, setYear] = useState("2021");
  const [month, setMonth] = useState("1");

  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  };
  const monthChangeHandler = (e) => {
    setMonth(e.target.value);
  };

  return (
    <form className={styles["container"]}>
      <div className={styles["year"]}>
        <label className={styles["label"]} htmlFor="year">
          Year
        </label>
        <select className={styles["select"]} name="year" id="year" onChange={yearChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={styles["month"]}>
        <label className={styles["label"]} htmlFor="month">
          Month
        </label>
        <select className={styles["select"]} name="month" id="month" onChange={monthChangeHandler}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div>
        <Link href={`/events/${year}/${month}`}>
          <Button color="primary">Search</Button>
        </Link>
      </div>
    </form>
  );
};

export default FilteredEvents;
