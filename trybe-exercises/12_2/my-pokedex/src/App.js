import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div>
      <Pokedex pokedata={data} />
    </div>
  );
}

export default App;
