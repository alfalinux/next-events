import { useState, useEffect } from "react";
import NewsletterAlert from "./NewsletterAlert";
import styles from "./Newsletter.module.css";

const Newsletter = (props) => {
  const [databaseEmail, setDatabaseEmail] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [emailRegistered, setEmailRegistered] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  console.log(alertMessage);
  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
      setShowAlert(false);
    }, 5000);
    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);
  }, [showAlert]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddEmail(emailInput);

    fetch("/api/newsletter")
      .then((response) => response.json())
      .then((data) => setDatabaseEmail(data.data));

    const match = databaseEmail.filter((d) => d.email === emailInput);
    if (match.length !== 0) {
      setAlertMessage(`Email ${emailInput} sudah pernah didaftarkan!`);
      setShowAlert(true);
      setEmailInput("");
      return;
    } else {
      const sendData = { email: emailInput };
      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => setEmailRegistered(data.registered.email));

      setEmailInput("");
      setShowAlert(true);
      setAlertMessage(`Email ${emailInput} berhasil didaftarkan!`);
    }
  };

  return (
    <>
      {showAlert ? (
        <NewsletterAlert message={alertMessage} />
      ) : (
        <div className={styles["container"]}>
          <p>Please register your email, to keep you update and let us send you an email of the upcoming events</p>
          <form className={styles["actions"]}>
            <input type="text" placeholder="input your email..." onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
            <button onClick={submitHandler}>Register</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Newsletter;
