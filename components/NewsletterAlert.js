import styles from "./NewsletterAlert.module.css";

const NewsletterAlert = (props) => {
  return <div className={styles["container"]}>{props.message}</div>;
};

export default NewsletterAlert;
