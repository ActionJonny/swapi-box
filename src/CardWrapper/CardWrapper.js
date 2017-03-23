import React, { Component } from 'react'
import CardBase from '../Cards/CardBase'
import './CardWrapper.css'


const CardWrapper = ({ display, favoriteToggle, addFavorites, removeFavorites, favoriteArray, nextClick }) => {
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
      <button onClick={ () => nextClick() } >More</button>
    </div>
  )
}

CardWrapper.propTypes = {
  display: React.PropTypes.array
}

export default CardWrapper
