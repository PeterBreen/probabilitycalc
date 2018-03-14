import React, { Component } from 'react';
import './DetermineCalc.css';

class DetermineCalc extends Component {

  constructor(props) {
     super(props);
     this.state = {
       currentNumerator: 0,
       currentDenominator: 0,
       fractionArray: []
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

   handleSubmit(event) {
     const numArray = this.state.fractionArray;
     numArray.push([this.state.currentNumerator, this.state.currentDenominator])
     this.setState({
       fractionArray: numArray
     });
     event.preventDefault();
   }

  render() {
    return (
      <div className="determine-output">
        <ol>
        <li>take two numbers as input, numerator and denominator</li>
        <li>store both numbers in an array (?)</li>
        <li>display stored fractions in DOM</li>
        <li>accept another two numbers after first two saved</li>
        <li>on submit, calculate odds and display results converted to percent</li>
        <li>clear arrays of input</li>
        </ol>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Odds <br />
          <input id="numeratorInput" name="numeratorInput" type="number" value={this.state.currentNumerator} onChange={this.handleChange} /> / <input id="denominatorInput" name="denominatorInput" type="number" value={this.state.currentDenominator} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Determine" />
        </form>
      </div>
    )}
  };

export default DetermineCalc;
