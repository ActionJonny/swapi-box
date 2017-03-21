export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
    this.store = {}
  }

  getAll(catagory, callback) {
    if (this.store[catagory]) {
      console.log('no need for API!')
      return this.store[catagory]
    }
    console.log('had to hit API')
    //fetch(api/catagory)
    fetch(`${this.baseURL}${catagory}`)
      .then((response) => {
        this.store[catagory] = response.json()
        return this.store[catagory]
      })
      .then((result) => {
        callback(result)
      })
  }

  callAPI(catagory, APIid, callback) {
    //fetch(api/catagory/APIid)
  }
}