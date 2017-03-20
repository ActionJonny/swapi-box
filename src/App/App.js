import React, { Component } from 'react';
import './App.css';
import APIHelper from '../apiHelper';
import FilmScroll from '../FilmScroll/FilmScroll';

const getRandomArbitrary = (min, max) => (Math.random() * (max - min) + min).toFixed(0)*1

class App extends Component {
  constructor () {
    super()
    this.APIGuy = new APIHelper()
    this.state = { film: {opening_crawl: ''} }
  }

  componentDidMount() {
    console.log('the Component did mount!')
    const films = this.APIGuy.getAll('films', (data) => this.dataArrival(data))
  }

  dataArrival(data) {
    console.log(data);
    this.setState({ film: data.results[getRandomArbitrary(0, data.results.length)] })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to SWAPIbox!</h2>
        </div>
        <FilmScroll film={this.state.film}/>
      </div>
    );
  }
}

export default App;
