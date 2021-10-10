import { useEffect, useState } from "react";

import axios from "axios";
import router from "next/router";
import { API_URL } from "../utils/env";
import { TiDelete as DeleteIcon } from "react-icons/ti";
import { MdModeEdit as EditIcon } from "react-icons/md";
import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";

import { deteleBlogController } from "../controllers/blog";

const Admin = () => {
  const [blogs, setblogs] = useState([]);
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState();
  const [title, settitle] = useState("");
  const [addLoading, setaddLoading] = useState(false);

  const submitAddBlog = (event) => {
    event.preventDefault();
    const formData = new FormData();
    setaddLoading(true);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", desc);
    axios
      .post(`${API_URL}/blogs/add`, formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
      .finally(() => router.reload());
  };
  useEffect(() => {
    axios
      .get(`${API_URL}/blogs`)
      .then((response) => {
        console.log(response.data);
        setblogs(response.data.reverse());
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="container mx-auto py-24 px-4">
        <div className="w-full md:w-1/2 text-center mx-auto">
          <h1
            className="text-2xl md:text-5xl font-body font-bold  
        "
          >
            ADMINISTRATEUR
          </h1>
          <p className=" opacity-75  mt-11 font-body">
            Dans cette page vous allez pouvoir modifier et ajouter les données
            du site
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-8 py-8">
          <div className="w-full md:w-1/2">
            {blogs.map((b) => (
              <div className="group">
                <div key={blogs.indexOf(b)} class=" ">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    {b.image !== "" && (
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={b.image}
                      />
                    )}
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        {b.title}
                      </h2>
                      <p class="text-gray-500 mt-2">{b.description}</p>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 transition duration-500 group-hover:opacity-80 mb-4 mt-1  mx-auto gap-14 flex-row  flex justify-center items-center">
                  <div
                    onClick={() => deteleBlogController(b._id)}
                    className="cursor-pointer bg-red-800 flex items-center gap-1 text-white px-3 py-1 rounded-md "
                  >
                    <DeleteIcon className=" text-white text-2xl text-center" />
                    supprimer
                  </div>
                  <div
                    onClick={() => {}}
                    className="cursor-pointer bg-primary flex items-center gap-1 text-white px-3 py-1 rounded-md "
                  >
                    <EditIcon className=" text-white text-2xl text-center" />
                    modifier
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3  border-gray-300 mb-11 md:pl-4 border-b-2 md:border-b-0 md:border-l-2 flex flex-col">
            <form onSubmit={submitAddBlog}>
              <input
                type="file"
                onChange={(event) => setimage(event.target.files[0])}
                name="image"
                accept="image/*"
              />

              <input
                type="text"
                placeholder="Donner un titre"
                name="title"
                onChange={(event) => settitle(event.target.value)}
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              />
              <textarea
                placeholder="Donner une description"
                name="description"
                onChange={(event) => setdesc(event.target.value)}
                className="flex items-center h-36 py-2 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              />
              {addLoading ? (
                <div className="py-6 flex items-center justify-center">
                  <LoadingIcon className="text-3xl font-bold text-yellow-400 animate-spin" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full cursor-pointer transition duration-300 hover:shadow-xl hover:bg-yellow-500 p-3 bg-yellow-400 text-xl  text-center rounded-md mt-4"
                >
                  Ajouter
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
