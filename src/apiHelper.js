export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
  }

  getAll(catagory, callback) {
    //fetch(api/catagory)
    fetch(`${this.baseURL}${catagory}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        callback(result)
      })
  }

  callAPI(catagory, APIid, callback) {
    //fetch(api/catagory/APIid)
  }
}