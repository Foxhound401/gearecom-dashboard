import axios from "axios";
const url = "http://localhost:5000/";

export const getAllManufacturers = manufacturers => {
  return axios
    .get(`${url}manufacturers/get-all-manufacturers`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log("ERROR AT GET MANUFACTURERS_API " + err);
    });
};
