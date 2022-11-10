import MainHeader from "../components/MainHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
