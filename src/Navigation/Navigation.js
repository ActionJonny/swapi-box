import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
  constructor () {
    super()
    this.state = { }
  }

  click(button) {
    this.props.handleClick(button)
  }

  render() {
    return (
      <div className="navigation">
      <button onClick={ () => this.props.prevClick() } >Prev</button>
        <button className="navButton" onClick={() => this.click('people')} >People</button>
        <button className="navButton" onClick={() => this.click('planets')}>Planets</button>
        <button className="navButton" onClick={() => this.click('vehicles')}>Vehicles</button>
        <button onClick={ () => this.props.nextClick() } >More</button>
      </div>
    )
  }
}

Navigation.propTypes = {
  handleClick: React.PropTypes.func,
}
