import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {homeworld: '?', homePop: '0', species: ''}
  }

  render() {
    return (
      <div className="card">
        <p>{ this.props.info.name }</p>
        <p>{ this.state.species } </p>
        <p>{ this.state.homeworld }</p>
        <p>{ this.state.homePop }</p>
        <br />
      </div>
    )
  }

  componentWillMount() {
    fetch(this.props.info.species).then(result => result.json()).then(data => this.setState({species: data.name}))
    fetch(this.props.info.homeworld).then(result => result.json()).then(data => this.setState({homeworld: data.name, homePop: data.population}))
  }
}

Card.propTypes = {
  info: React.PropTypes.object,
  api: React.PropTypes.object
}

export default Card
