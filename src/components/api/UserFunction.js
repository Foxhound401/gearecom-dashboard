import axios from 'axios'
const url = "http://localhost:5000/"

export const register = newUser => {
    return axios
    .post(`${url}users/register`, {
        username: newUser.username,
        password: newUser.password,
        email: newUser.email,
        name: newUser.name
    })
    .then(res => {
        console.log("Regsitered")
    })
}

export const login = user => {
    // console.log("email: " + user.email)
    // console.log("password: " + user.password)
    return axios
    .post(`${url}users/login`,{
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userToken', res.data)
        // console.log("data: " + res.data)
        return res.data
    })
    .catch(err => {
        console.log("ERROR AT LOGIN" +  err)
    })
}