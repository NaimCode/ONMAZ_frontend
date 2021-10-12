import Appbar from "../components/appbar";
import { useState } from "react";
import "../styles/globals.css";

import ContactSection from "../components/contact";

function MyApp({ Component, pageProps }) {
  const [contact, setcontact] = useState(false);
  return (
    <div className="relative">
      <Appbar setcontact={setcontact} contact={contact} />
      {contact && <ContactSection setcontact={setcontact} contact={contact} />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
