import axios from 'axios'

const api = axios.create({
  baseURL:'https://skeleton-nodejs.guilhermetombin.repl.co'
})

export default api;