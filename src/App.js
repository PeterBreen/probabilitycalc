import React, { Component } from 'react';
import './App.css';
import RNGCalc from './RNGCalc';
import DetermineCalc from './DetermineCalc';
import IntroText from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroText section="probability" />
        <RNGCalc />
        <IntroText section="determine" />
        <DetermineCalc />
      </div>
    )}
  };

export default App;
