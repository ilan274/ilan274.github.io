import React from 'react';
import Pokemons from './Pokemons';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    const { pokedata } = this.props;
    return (
      <div className='container'>
        {<Pokemons key={pokedata.id} poke={pokedata}/>}
      </div>
    );
  }
}

export default Pokedex;