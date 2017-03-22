import React, { Component } from 'react'
import APIHelper from './apiHelper'

export default class bigAPIguy extends Component {
  constructor () {
    super()
    this.state = { }
    this.APIguy = new APIHelper()
  }

  click(button) {
    this.props.handleClick(button)
  }

  render() {
    return null
  }
}