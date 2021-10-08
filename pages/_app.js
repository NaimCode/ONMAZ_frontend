import Appbar from "../components/appbar";
import Footer from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
