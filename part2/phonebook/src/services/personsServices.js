import axios from "axios";

const baseUrl = 'http://localhost:3002/persons'

const create = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then(res => res.data)
}

export { create }