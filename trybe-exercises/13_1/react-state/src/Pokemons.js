import React from 'react';
import './Pokemons.css'

class Pokemons extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke;
    return (
      <div className='template'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}</p>
        <img src={image}></img>
      </div>
    );
  }
}

export default Pokemons;
