import React, { Component } from 'react';
import './DetermineCalc.css';
import FractionOutput from './FractionOutput';

class DetermineCalc extends Component {

  constructor(props) {
     super(props);
     this.state = {
       currentNumerator: 1,
       currentDenominator: 1,
       fractionArray: [],
       computedPercent: 0,
       displayNum: 0,
       displayDem: 0,
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.displayResults = this.displayResults.bind(this);
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
     numArray.push([parseInt(this.state.currentNumerator, 10), parseInt(this.state.currentDenominator, 10)])
     this.setState({
       fractionArray: numArray
     });
    event.preventDefault();
   }
    //must take nested array and number as inputs, e.g. [[1,2]], 0
    sumArrayTotals(inputArray, indexVal) {
      let totalNum = 1; //to avoid a divide by zero error
      for (var i = 0; i < inputArray.length; i++) {
        totalNum *= inputArray[i][indexVal];
      }
      return totalNum;
    }

  displayResults(event) {
    event.preventDefault();
    this.setState({
      displayNum: this.sumArrayTotals(this.state.fractionArray, 0),
      displayDem: this.sumArrayTotals(this.state.fractionArray, 1),
      computedPercent: (this.sumArrayTotals(this.state.fractionArray, 0) / this.sumArrayTotals(this.state.fractionArray, 1) * 100).toFixed(3)
    });
  };

  render() {
    return (
      <div className="determine-output">
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Odds <br />
          <input id="numeratorInput" name="currentNumerator" type="number" value={this.state.currentNumerator} onChange={this.handleChange} /> / <input id="denominatorInput" name="currentDenominator" type="number" value={this.state.currentDenominator} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add to calculation" />
        </form>
        <FractionOutput data={this.state.fractionArray}/>
        <form onSubmit={this.displayResults}>
          {this.state.fractionArray.length > 0 && <input type="submit" value="Determine probability" />}
        </form>
        {this.state.computedPercent > 0 && <p>The outcome probability of these events is {this.state.displayNum}/{this.state.displayDem}, or ~{this.state.computedPercent}%.</p>}
      </div>
    )}
  };

export default DetermineCalc;
