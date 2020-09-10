import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSecretWord} from './actions';
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

const mapStateToProps = (state) => {
  const {success, guessedWords,secretWord} = state;
  return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(App);
