import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
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
    return axios
    .post('users/login',{
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userToken', res.data)
        return res.data
    })
    .catch(err => {
        console.log("ERROR AT LOGIN" +  err)
    })
}