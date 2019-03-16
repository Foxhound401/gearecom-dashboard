import axios from "axios";
const url = "http://localhost:5000/";

export const getAllProducts = products => {
  return axios
    .get(`${url}products/get-all-products`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log("ERROR AT GETALLPRODUCTS_API " + err);
    });
};
