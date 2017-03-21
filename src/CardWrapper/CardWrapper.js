import React, { Component } from 'react'
import Card from '../Card/Card'

const CardWrapper = ({ display }) => {
  const cards = display.map(card => <Card info={card} />)
  return (
    <div className="card-wrapper">
      { cards }
    </div>
  )
}

CardWrapper.propTypes = {
  display: React.PropTypes.array
}

export default CardWrapper
