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
      fetch(`${this.baseURL}${catagory}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.store[catagory] = result
        console.log(this.store)
        callback(result)
      })
    }
  }
  
}