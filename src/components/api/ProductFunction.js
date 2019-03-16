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

export const addNewProduct = newProduct => {
  return axios
    .post(`${url}products/add-new-product`, {
      name: newProduct.name,
      price: newProduct.price,
      quantity: newProduct.quantity,
      manufacter: newProduct.manufacter,
      category: newProduct.category
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(error => {
      console.log("ERROR AT ADD NEW PRODUCT " + error);
    });
};
