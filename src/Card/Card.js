import React, { Component } from 'react'

const Card = ({ info }) => {
  console.log(info)
  return (
    <div className="card">
      { info.name }
    </div>
  )
}

export default Card
