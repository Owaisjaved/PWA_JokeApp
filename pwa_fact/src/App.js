import React from 'react';
import './App.css';
import funimg from './images/fun.jpg'
import Joke from './Joke'

const App = () => {

  return (
    <div className="App">
      <img src={funimg} alt="funny" className="responsive"></img>
      <Joke />
    </div>
  );
}

export default App;
