export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
  }

  getAll(catagory, callback) {
    fetch(`${this.baseURL}${catagory}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        callback(result)
      })
    //fetch(api/catagory)
  }

  callAPI(catagory, APIid) {
    //fetch(api/catagory/APIid)
  }
}