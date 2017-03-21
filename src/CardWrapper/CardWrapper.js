import React, { Component } from 'react'
import Card from '../Card/Card'

const CardWrapper = ({ display, api }) => {
  const cards = display.map((card, i) => <Card key={i} api={api} info={card} />)
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
