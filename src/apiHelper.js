export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
    this.store = {}
  }

  getAll(catagory, callback) {
    if (this.store[catagory]) {
      console.log('no need for API!')

      callback(this.store[catagory])
    } else {
      console.log('had to hit API')
      //fetch(api/catagory)
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

  callAPI(catagory, APIid, callback) {
    //fetch(api/catagory/APIid)
  }
}