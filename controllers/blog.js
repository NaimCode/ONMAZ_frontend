import axios from "axios";
import { API_URL } from "../utils/env";
import router from "next/router";
export const deteleBlogController = (id) => {
  axios
    .delete(`${API_URL}/blogs/${id}`)
    .then(() => console.log("Blog supprimé"))
    .catch((error) => console.log(error))
    .finally(() => router.reload());
};
