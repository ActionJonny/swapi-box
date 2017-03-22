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
        <button className="navButton" onClick={() => this.click('people')} >People</button>
        <button className="navButton" onClick={() => this.click('planets')}>Planets</button>
        <button className="navButton" onClick={() => this.click('vehicles')}>Vehicles</button>
      </div>
    )
  }
}

Navigation.propTypes = {
  handleClick: React.PropTypes.function,
}
