import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const App = () => (
  <ul>{task.map(val => <li>{val}</li>)}</ul>
);


export default App;
