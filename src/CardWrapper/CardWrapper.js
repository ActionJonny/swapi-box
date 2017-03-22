import React, { Component } from 'react'
import PeopleCard from '../Cards/PeopleCard'
import PlanetCard from '../Cards/PlanetCard'
import VehicleCard from '../Cards/VehicleCard'
import './CardWrapper.css'

const components = {
  planets: PlanetCard,
  vehicles: VehicleCard,
  people: PeopleCard
}

const CardWrapper = ({ display, api, favoriteToggle, addFavorites, removeFavorites, favoriteArray }) => {
  if(favoriteToggle) {
    display = favoriteArray
  }
  const CardType = components[display[0].buttonType]
  const cards = display.map((card, i) => <CardType favoriteToggle={favoriteToggle} removeFavorites={removeFavorites} addFavorites={addFavorites} key={i} api={api} info={card} />)
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
