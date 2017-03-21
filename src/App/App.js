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
      displayedCards: []
      }
  }

  componentDidMount() {
    this.APIGuy.getAll('films', (data) => this.filmDataArrivalHandler(data))
  }

  filmDataArrivalHandler(data) {
    const randoFilm = data.results[getRandomArbitrary(0, data.results.length)]
    this.setState({ film: randoFilm })
  }

  navDataArrivalHandler(data) {
    console.log(data.results)
    this.setState({ displayedCards: data.results })
  }


  handleClick(button) {
    switch (button) {
      case 'people':
        console.log('people button clicked')
        //eventually, check peopleStore first. OR maybe use APIHelper to handle redundant API calls do I care about API calls?
        this.APIGuy.getAll('people', (data) => this.navDataArrivalHandler(data))
        break
      case 'planets':
        console.log('planets button clicked')

        this.APIGuy.getAll('planets', (data) => this.navDataArrivalHandler(data))
        break
      case 'vehicles':
        console.log('vehicles button clicked')

        this.APIGuy.getAll('vehicles', (data) => this.navDataArrivalHandler(data))
        break
      default:
        console.log('bad button string input')

    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to SWAPIbox!</h2>
          <Navigation handleClick={this.handleClick.bind(this)}/>
        </div>
        <CardWrapper display={this.state.displayedCards}/>
        <FilmScroll film={this.state.film}/>
      </div>
    )
  }
}

export default App;
