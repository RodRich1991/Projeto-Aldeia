import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'
export default class BaseProxy {
  constructor (endpoint, token) {
    this.endpoint = endpoint
    this.headers = {headers: {authorization: token}}
  }

  findAll () {
    return new Promise((resolve, reject) => {
      axios.get(`${this.endpoint}`, this.headers)
        .then((response) => resolve(response.data))
        .catch((erro) => reject(erro.data) || reject(erro))
    })
  }

  findOneById (id) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.endpoint}/${id}`, this.headers)
        .then((response) => resolve(response.data))
        .catch((erro) => reject(erro.data) || reject(erro))
    })
  }

  create (item) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.endpoint}`, item, this.headers)
        .then((response) => resolve(response.data))
        .catch((erro) => reject(erro.data) || reject(erro))
    })
  }

  update (id, item) {
    return new Promise((resolve, reject) => {
      axios.put(`${this.endpoint}/${id}`, item, this.headers)
        .then((response) => resolve(response.data))
        .catch((erro) => reject(erro.data) || reject(erro))
    })
  }
}
