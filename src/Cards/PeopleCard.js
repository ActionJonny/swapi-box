import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '?',
      homePop: '0',
      species: '',
      favorite: false
    }
  }

  render() {
    return (
      <div className="card">
        <button onClick={ () => this.setState({ favorite: !this.state.favorite }) } className={this.state.favorite ? 'favIcon' : 'nonFavIcon'}></button>
        <p>Name: { this.props.info.name }</p>
        <p>Species: { this.state.species } </p>
        <p>Homeworld: { this.state.homeworld }</p>
        <p>Planet Population: { this.state.homePop }</p>
        <br />
      </div>
    )
  }

  componentWillMount() {
    fetch(this.props.info.species)
      .then(result => result.json())
      .then(data => this.setState({species: data.name}))
    fetch(this.props.info.homeworld)
      .then(result => result.json())
      .then(data => this.setState({homeworld: data.name, homePop: data.population}))
  }
}

Card.propTypes = {
  info: React.PropTypes.object,
  api: React.PropTypes.object
}

export default Card
