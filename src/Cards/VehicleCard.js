import React, { Component } from 'react'

class Card extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div className="card">
        <button>Star</button>
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