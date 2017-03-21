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
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    )
  }
}
