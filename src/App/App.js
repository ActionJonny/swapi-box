import React, { Component } from 'react'
import './App.css'
import APIHelper from '../apiHelper'
import FilmScroll from '../FilmScroll/FilmScroll'
import Navigation from '../Navigation/Navigation'
import CardWrapper from '../CardWrapper/CardWrapper'

const getRandomArbitrary = (min, max) => (Math.random() * (max - min) + min).toFixed(0)*1

class App extends Component {
  constructor () {
    super()
    this.APIGuy = new APIHelper()
    this.state = {
      film: { opening_crawl: '', title: '' },
      displayedCards: [],
      favoriteToggle: false,
      favoriteArray: [],
    }
  }

  componentDidMount() {
    this.APIGuy.getAll('films', (data) => this.filmDataArrivalHandler(data))
  }

  filmDataArrivalHandler(data) {
    const randoFilm = data.results[getRandomArbitrary(0, data.results.length)]
    this.setState({ film: randoFilm })
  }

  handleClick(button) {
    //This click is from one of three main nav buttons
    this.lastButton = button
    this.setState({favoriteToggle: false})
    this.APIGuy.getAll(button, (data) => this.navDataArrivalHandler(data, button))
  }

  navDataArrivalHandler(data, buttonType) {
    this.next = data.next
    this.previous = data.previous
    data.results.forEach(obj => {
      Object.assign(obj, { buttonType })
      Object.assign(obj, { favoriteToggle: this.state.favoriteArray.find(card => card.name === obj.name) })
      })
    this.setState({ displayedCards: data.results })
  }

  toggleDisplayFavorite() {
    this.setState({ favoriteToggle: !this.state.favoriteToggle })
  }

  addFavorites(cardData) {
    cardData.favoriteToggle = true
    this.state.favoriteArray.push(cardData)
    this.setState({ favoriteArray: this.state.favoriteArray })
  }

  removeFavorites(cardData) {
    cardData.favoriteToggle = false
    const updatedFavorites = this.state.favoriteArray.filter(card => {
      return card.name !== cardData.name
    })
    this.setState({ favoriteArray: updatedFavorites })
  }

  nextPage() {
    if(!this.next) {return}
    fetch(this.next).then(result => result.json()).then(data => this.navDataArrivalHandler(data, this.lastButton))
  }

  prevPage() {
    if(!this.previous) {return}
    fetch(this.previous).then(result => result.json()).then(data => this.navDataArrivalHandler(data, this.lastButton))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to SWAPIbox!</h2>
          <button onClick={ () => this.toggleDisplayFavorite() }>Favorites</button>
          <Navigation prevClick={ () => this.prevPage() } nextClick={ () => this.nextPage() } handleClick={ this.handleClick.bind(this) } />
        </div>
        <CardWrapper
          nextClick={() => this.nextPage() }
          removeFavorites={ (data) => this.removeFavorites(data) }
          addFavorites={ (data) => this.addFavorites(data) }
          favoriteArray={this.state.favoriteArray}
          favoriteToggle={this.state.favoriteToggle}
          api={this.APIGuy}
          display={this.state.displayedCards}/>
        <FilmScroll film={this.state.film}/>
      </div>
    )
  }
}

export default App;
