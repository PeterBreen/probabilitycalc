import React, { Component } from 'react';
import './App.css';
import RNGCalc from './RNGCalc';
import DetermineCalc from './DetermineCalc';
import IntroText from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-probability">
          <IntroText section="probability" />
          <RNGCalc />
        </div>
        <div className="app-determine">
          <IntroText section="determine" />
          <DetermineCalc />
        </div>
      </div>
    )}
  };

export default App;
