import axios from "axios";
const url = "http://localhost:5000/";

export const getAllCategories = categories => {
  return axios
    .get(`${url}categories/get-all-categories`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log("ERROR AT GET CATEGORIES_API " + err);
    });
};
