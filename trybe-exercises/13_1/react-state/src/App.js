import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: data[0],
      count: 0
    };
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  stateUpdate() {
    if (this.state.count < 8) {
      this.setState(prevState => ({
        filter: data[prevState.count + 1],
        count: prevState.count + 1
      }));
    } else {
      this.setState(prevState => ({
        count: 0,
        filter: data[0]
      }));
    }
  }

  render() {
    return (
      <div>
        <Pokedex pokedata={this.state.filter} />
        <button onClick={this.stateUpdate}>Next Pokemon</button>
      </div>
    );
  }
}

export default App;
