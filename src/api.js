import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { error } from 'util';

const axiosInstance = axios.create({
  baseURL: 'https://marsshop.herokuapp.com/',
  headers: { 'Content-Type': 'application/json' }
})

export const login = (username, password) => {
  const data = {
    username: username,
    password: password
  }

  return axiosInstance.post('login', data)
    .then(data => data)
    .catch(error => error.response)
}
export const publishPost = (title, content) => {
  const data = {
    title: title,
    content: content,
    user: { username: localStorage.getItem('username') }
  }

  return axiosInstance.post('api/post/create/', data)
    .then(data => data)
    .catch(error => error.response)
}

export const getAllPosts = () => {
  return axiosInstance.get('/api/post/all/')
    .then(response => response.data)
    .catch(error => { throw (error.response) })
}

export const register = (firstName, lastName, username, password, email, phone) => {
  const data = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
    email: email,
    phone: phone
  }
  return axiosInstance.post('api/user/signup', data)
    .then(data => data)
    .catch(error => error.response)
}

/*export const getUser = (firstName, username) => {
  return axiosInstance.get('/api/user/getuser')
    .then(response => response.data)
}
export const deleteuser = (data) => {
  return axiosInstance.delete('/api/user/delete/' + data)
    .then(data => data)

}*/