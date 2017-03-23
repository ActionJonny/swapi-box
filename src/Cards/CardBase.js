import React from 'react'
import PeopleCard from './PeopleCard'
import PlanetCard from './PlanetCard'
import VehicleCard from './VehicleCard'

const components = {
  planets: PlanetCard,
  vehicles: VehicleCard,
  people: PeopleCard
}

const CardBase = (props) => {
  const CardType = components[props.info.buttonType]
  return <CardType {...props} />
}

CardBase.propTypes = {
  addFavorites: React.PropTypes.func,
  removeFavorites: React.PropTypes.func,
  info: React.PropTypes.object
}


export default CardBase
