import React, { Component } from 'react';
// import {connect} from 'react-redux';
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
      </div>
    );
    }
}

export default App;
