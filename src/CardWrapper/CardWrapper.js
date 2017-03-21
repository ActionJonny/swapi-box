import React, { Component } from 'react'
import PeopleCard from '../Cards/PeopleCard'
import PlanetCard from '../Cards/PlanetCard'
import VehicleCard from '../Cards/VehicleCard'

const components = {
  planets: PlanetCard,
  vehicles: VehicleCard,
  people: PeopleCard
}

const CardWrapper = ({ display, api }) => {
  const CardType = components[display[0].buttonType]
  const cards = display.map((card, i) => <CardType key={i} api={api} info={card} />)
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
