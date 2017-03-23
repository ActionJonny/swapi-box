import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      nameList: [],
    }
  }

  handleFavorite() {
    if(this.props.info.favoriteToggle) {
      this.props.removeFavorites(this.props.info)
    } else {
      this.props.addFavorites(this.props.info)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(this.props.info.residents) !== JSON.stringify(prevProps.info.residents)) {
      const newData = []
      this.props.info.residents.forEach((apiUrl) => {
        fetch(apiUrl)
          .then(result => result.json())
          .then(data => {
            newData.push(data.name)
            this.setState({nameList: newData})
          });
      })
    }
  }

  render() {
    return (
      <div className="card">
      <button onClick={ () => this.handleFavorite() } className={this.props.info.favoriteToggle ? 'favIcon' : 'nonFavIcon'}></button>
        <p className="first-p-tag"><span className="text-color">Name:</span> { this.props.info.name }</p>
        <p><span className="text-color">Terrain:</span> { this.props.info.terrain } </p>
        <p><span className="text-color">Population:</span> { this.props.info.population }</p>
        <p><span className="text-color">Residents: </span>{ this.state.nameList.join(', ') || 'none'}</p>
        <br />
      </div>
    )
  }

  componentWillMount() {
    this.props.info.residents.forEach((apiUrl) => {
      fetch(apiUrl)
        .then(result => result.json())
        .then(data => {
          this.state.nameList.push(data.name)
          this.setState({nameList: this.state.nameList})
        });
    })
  }
}

Card.propTypes = {
  info: React.PropTypes.object,
  api: React.PropTypes.object
}

export default Card
