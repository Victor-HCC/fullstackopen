import axios from "axios";

const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then(res => res.data)
}

const deleteById = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export { create, getAll, deleteById }