import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      nameList: [],
      favorite: false
    }
  }



  handleFavorite() {
    if(this.state.favorite) {
      this.props.removeFavorites(this.props.info)
    } else {
      this.props.addFavorites(this.props.info)
    }
    this.setState({ favorite: !this.state.favorite })
  }

  render() {
    return (
      <div className="card">
      <button onClick={ () => this.handleFavorite() } className={this.state.favorite ? 'favIcon' : 'nonFavIcon'}></button>
        <p>Name: { this.props.info.name }</p>
        <p>Terrain: { this.props.info.terrain } </p>
        <p>Population: { this.props.info.population }</p>
        <p>Residents: { this.state.nameList.join(', ') || 'none'}</p>
        <br />
      </div>
    )
  }

  componentDidMount() {
    this.setState({ favorite: this.props.favoriteToggle })
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
