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
      this.props.info.residents.map((apiUrl) => {
        fetch(apiUrl)
          .then(result => result.json())
          .then(data => {
            this.state.nameList = []
            this.state.nameList.push(data.name)
            this.setState({nameList: this.state.nameList})
          });
      })
    }

  }

  render() {
    return (
      <div className="card">
      <button onClick={ () => this.handleFavorite() } className={this.props.info.favoriteToggle ? 'favIcon' : 'nonFavIcon'}></button>
        <p>Name: { this.props.info.name }</p>
        <p>Terrain: { this.props.info.terrain } </p>
        <p>Population: { this.props.info.population }</p>
        <p>Residents: { this.state.nameList.join(', ') || 'none'}</p>
        <br />
      </div>
    )
  }

  componentWillMount() {
    this.props.info.residents.map((apiUrl) => {
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
