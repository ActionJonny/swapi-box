import React from 'react'
import CardBase from '../Cards/CardBase'
import './CardWrapper.css'


const CardWrapper = ({ display, favoriteToggle, addFavorites, removeFavorites, favoriteArray }) => {
  if(favoriteToggle) {
    display = favoriteArray
  }
  if(display.length === 0) {
    return (
      <div>
        Please Select a Button
      </div>
    )
  }
  const cards = display.map((card, i) => <CardBase removeFavorites={removeFavorites} addFavorites={addFavorites} key={i} info={card} />)
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
