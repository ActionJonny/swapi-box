export default class APIHelper {
  constructor() {
    this.baseURL = 'https://swapi.co/api/'
  }

  getAll(catagory) {
    fetch(`${this.baseURL}${catagory}`)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        console.log(result)
        return result
      })
    //fetch(api/catagory)
  }

  callAPI(catagory, APIid) {
    //fetch(api/catagory/APIid)
  }
}