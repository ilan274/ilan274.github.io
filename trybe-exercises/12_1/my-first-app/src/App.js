import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = ["Wake up", "Drink coffee", "Brush teeth", "Go to work"];

const App = () => (
  <div className="container">
    <ol>{task.map((val) => <li key={val}>{val}</li>)}</ol>
  </div>
);


export default App;
