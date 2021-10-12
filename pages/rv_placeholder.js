import { API_URL } from "../utils/env";
import { useState } from "react";
import axios from "axios";
const RV = () => {
  const [date, setdate] = useState("");
  const [nom, setnom] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("text", message);
    console.log(event.target.value);
    console.log(message);
    console.log(formData);
    axios.post(`${API_URL}/rendez-vous`, formData);
  };

  return (
    <div className="h-screen px-3 flex items-center justify-center">
      <form method="post" action={`${API_URL}/rv`}>
        <input type="text" name="text" className="border-2 " />
        <button type="submit">Submit</button>
      </form>
      {/* <div className="container mx-auto">
        <form
          //{`${API_URL}/rendez-vous`}
          onSubmit={handleSubmit}
          class="form bg-white p-6 my-10 relative"
        >
          <div
            class="icon bg-primary text-white w-6 h-6 absolute flex items-center justify-center p-5"
            style={{ left: "-40px" }}
          >
            <i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
          </div>
          <h3 class="text-2xl text-gray-900 font-semibold">
            Prendre un rendez-vous
          </h3>
          <p class="text-gray-600">
            {" "}
            Veuillez completer les champs suivant et soumettre le formulaire
          </p>
          <hr className="w-full h-1 py-7" />
          <label>Choisir votre date</label>
          <input
            required
            type="date"
            onChange={(event) => setdate(event.target.value)}
            required
            name="date"
            placeholder="Date"
            class="border p-2  w-full"
          />

          <div class="flex space-x-5 mt-3">
            <input
              required
              type="text"
              onChange={(event) => setnom(event.target.value)}
              name="nom"
              placeholder="Nom"
              class="border p-2  w-1/2"
            />
            <input
              required
              type="tel"
              name="tel"
              onChange={(event) => settel(event.target.value)}
              placeholder="Tel"
              class="border p-2 w-1/2"
            />
          </div>

          <input
            resource
            type="email"
            name="email"
            onChange={(event) => setemail(event.target.value)}
            placeholder="Email"
            class="border p-2 w-full mt-3"
          />
          <textarea
            name="text"
            onChange={(event) => setmessage(event.target.value)}
            cols="10"
            rows="7"
            placeholder="Message (optionnel)"
            className="border p-2 mt-3 w-full"
          />

          <button
            type="submit"
            class=" w-full mt-6 bg-yellow-400 hover:bg-yellow-300  font-semibold p-3"
          >
            Soumettre
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default RV;
