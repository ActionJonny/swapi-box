import React, { Component } from 'react';
import './App.css';
import APIHelper from '../apiHelper';


class App extends Component {
  constructor () {
    super()
    this.APIGuy = new APIHelper()
  }

  componentDidMount() {
    console.log('the Component did mount!')
    const people = this.APIGuy.getAll('people')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to SWAPIbox!</h2>
        </div>
      </div>
    );
  }
}

export default App;
