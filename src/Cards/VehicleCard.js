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
        <p>Name: { this.props.info.name }</p>
        <p>Model: { this.props.info.model } </p>
        <p>Class: { this.props.info.vehicle_class }</p>
        <p>Number of Passengers: { this.props.info.passengers }</p>
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
