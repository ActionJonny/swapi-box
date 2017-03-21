import React, { Component } from 'react'

// console.log(info.homeworld)
class Card extends Component {
  constructor() {
    super()
    this.state = {homeworld: '?', homePop: '0'}
  }

  render() {
    return (
      <div className="card">
        <p>{ this.props.info.name }</p>
        <p>{ this.state.homeworld }</p>
        <p>{ this.state.homePop }</p>
      </div>
    )
  }

  componentWillMount() {
    fetch(this.props.info.homeworld).then(result => result.json()).then(data => this.setState({homeworld: data.name, homePop: data.population}))
  }
}

export default Card
