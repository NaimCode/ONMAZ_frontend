import Appbar from "../components/appbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Appbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
