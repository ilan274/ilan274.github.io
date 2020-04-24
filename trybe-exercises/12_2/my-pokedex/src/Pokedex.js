import React from 'react';
import Pokemons from './Pokemons';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    const { pokedata } = this.props;
    return (
      <div className='container'>
        {pokedata.map((pokemon) => {
          return <Pokemons key={pokemon.name} poke={pokemon} />;
        })}
      </div>
    );
  }
}

export default Pokedex;