import { API_URL } from "../utils/env";
import { useState } from "react";
import router from "next/router";
import axios from "axios";
import { monthNumToString } from "../functions/converting";
const RV = () => {
  const [date, setdate] = useState("");
  const [nom, setnom] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [file, setfile] = useState("");
  const [error, seterror] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const datelist = date.split("-");

    formData.append(
      "date",
      `${datelist[2]} ${monthNumToString(parseInt(datelist[1]))} ${datelist[0]}`
    );
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("message", message);
    formData.append("image", file);
    console.log(event.target.value);
    console.log(message);
    console.log(formData);
    axios
      .post(`${API_URL}/rv`, formData)
      .then((response) =>
        response.status == 200
          ? router.push("/rendez-vous-reussi")
          : alert("Erreur d'envoi, veuillez réessayer")
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-16 md:py-0 md:h-screen px-3 flex items-center justify-center">
      <div className="container mx-auto">
        <form
          //{`${API_URL}/rendez-vous`}
          onSubmit={handleSubmit}
          class="form bg-white  my-10 relative"
        >
          <h3 class="text-2xl text-gray-900 font-semibold">
            Prendre un rendez-vous
          </h3>
          <p class="text-gray-600 mb-3">
            {" "}
            Veuillez completer les champs suivant et soumettre le formulaire
          </p>
          <hr className="w-full h-1 my-4 flex justify-center items-center" />
          <label className="opacity-50">Choisir votre date</label>
          <input
            type="file"
            onChange={(event) => setfile(event.target.value)}
            name="image"
            placeholder="Date"
            class="border p-2  w-full hidden"
          />
          <input
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
      </div>
    </div>
  );
};

export default RV;
