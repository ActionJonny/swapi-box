import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '?',
      homePop: '0',
      species: '',
    }
  }

  handleFavorite() {
    if(this.props.info.favoriteToggle) {
      this.props.removeFavorites(this.props.info)
    } else {
      this.props.addFavorites(this.props.info)
    }
  }

  render() {
    return (
      <div className="card">
        <button onClick={ () => this.handleFavorite() } className={this.props.info.favoriteToggle ? 'favIcon' : 'nonFavIcon'}></button>
        <p className="first-p-tag"><span className="text-color">Name:</span> { this.props.info.name }</p>
        <p><span className="text-color">Species:</span> { this.state.species } </p>
        <p><span className="text-color">Homeworld:</span> { this.state.homeworld }</p>
        <p><span className="text-color">Planet Population:</span> { this.state.homePop }</p>
        <br />
      </div>
    )
  }

  componentDidMount() {
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
