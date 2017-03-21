import React, { Component } from 'react'

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
        <button onClick={() => this.click('people')} >People</button>
        <button onClick={() => this.click('planets')}>Planets</button>
        <button onClick={() => this.click('vehicles')}>Vehicles</button>
      </div>
    )
  }
}
