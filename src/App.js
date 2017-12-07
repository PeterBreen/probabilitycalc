import React, { Component } from 'react';
import RNGCalc from './Calc.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is a tool for calculating the probability of getting a certain outcome at least once, within a given number of attempts.
        </p>
        <p className="App-intro">
          For example, the probability of rolling a 3 on a 6-sided die is 16.67%. If you roll the die 25 times, the probability of rolling a 3 at least once is 98.95%.
        </p>
        <Calc />
      </div>

    )}
  };

export default App;
