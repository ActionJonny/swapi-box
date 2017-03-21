import React, { Component } from 'react'
// import PeopleCard from '../Cards/PeopleCard'
import PlanetCard from '../Cards/PlanetCard'
// import VehicleCard from '../Cards/VehicleCard'


const CardWrapper = ({ display, api, cardType }) => {
  // React.createElement(cardType, {})
  const cards = display.map((card, i) => <PlanetCard key={i} api={api} info={card} />)
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
