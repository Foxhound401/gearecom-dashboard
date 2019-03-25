import axios from "axios";
const url = "http://localhost:5000/";

export const register = newUser => {
  return axios
    .post(`${url}users/register`, {
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role
    })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log("ERROR AT REGISTER_API " + error);
    });
};

export const login = user => {
  return axios
    .post(`${url}users/login`, {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log("ERROR AT LOGIN" + err);
    });
};

export const getAllUsers = users => {
  return axios
    .get(`${url}users/get-all-users`)
    .then(res => {
      console.log("res.data" + res.data);
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log("ERROR AT GETALLUSER_API " + err);
    });
};
