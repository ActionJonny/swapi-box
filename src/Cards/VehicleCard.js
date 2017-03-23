import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
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
        <p className="first-p-tag"><span className="text-color">Name: </span>{ this.props.info.name }</p>
        <p><span className="text-color">Model: </span> { this.props.info.model } </p>
        <p><span className="text-color">Class: </span> { this.props.info.vehicle_class }</p>
        <p><span className="text-color">Number of Passengers: </span> { this.props.info.passengers }</p>
        <br />
      </div>
    )
  }
}

Card.propTypes = {
  info: React.PropTypes.object,
  api: React.PropTypes.object
}

export default Card
