export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
    this.store = {}
  }

  getAll(catagory, callback) {
    fetch(`${this.baseURL}${catagory}`)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.store[catagory] = result
      callback(result)
    })
  }
}
