import React, { Component } from 'react';
import './DetermineCalc.css';

class DetermineCalc extends Component {

  constructor(props) {
     super(props);
     this.state = {
       currentNumerator: 1,
       currentDenominator: 1,
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Odds <br />
          <input id="numeratorInput" name="currentNumerator" type="number" value={this.state.currentNumerator} onChange={this.handleChange} /> / <input id="denominatorInput" name="currentDenominator" type="number" value={this.state.currentDenominator} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add to calculation" />
        </form>
        <p>{this.state.fractionArray}</p>
        <form onSubmit={this.displayResults}>
          <input type="submit" value="Determine probability" />
        </form>
      </div>
    )}
  };

export default DetermineCalc;
