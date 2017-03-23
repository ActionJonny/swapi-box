import React, { Component } from 'react'
import PeopleCard from './PeopleCard'
import PlanetCard from './PlanetCard'
import VehicleCard from './VehicleCard'

const components = {
  planets: PlanetCard,
  vehicles: VehicleCard,
  people: PeopleCard
}

// const CardType = components[display[0].buttonType]

const CardBase = (props) => {
  const CardType = components[props.info.buttonType]
  return <CardType {...props} />
}

export default CardBase

