import React from "react";
import styles from "./Button.module.css";
import NextIcon from "../public/icons/next-icons";

const Button = (props) => {
  return (
    <div className={`${styles["btn"]} ${styles[props.color]}`}>
      <p className={styles["txt"]}>{props.children} </p>
      <span className={styles["icon"]}>
        <NextIcon />
      </span>
    </div>
  );
};

export default Button;
