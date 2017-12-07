import React, { Component } from 'react';
import './Calc.css';

class RNGCalc extends Component {
  render() {
    return (
      <div className="RNGCalc">
      <label for="outcomeProb">Outcome Probability</label>
      <input id="outcomeProb" type="number" name="outcomeProb" value="0">

      <label for="numAttempts">Number of attempts</label>
      <input id="numAttempts"> type="number" name="numAttempts" value="0">
      </div>
    )}
  };

export default RNGCalc;
