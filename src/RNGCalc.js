import React, { Component } from 'react';
import './RNGCalc.css';

class RNGCalc extends Component {

  constructor(props) {
     super(props);
     this.state = {
       outcomeProb: 0,
       numAttempts: 0
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.probabilityCalc = this.probabilityCalc.bind(this);
   }

   handleChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

   probabilityCalc(probability, attempts) {
     // equation: 1 - ( ( 1 - x ) ^ y )
     let pChance = probability / 100;
     let odds = (1.00 - (Math.pow((1.00 - pChance), attempts))) * 100;
     return odds.toFixed(5);
   }




   handleSubmit(event) {
     const calcResult = this.probabilityCalc(this.state.outcomeProb, this.state.numAttempts);
     alert('Outcome Probability: ' + this.state.outcomeProb + ' Number of Attempts: ' + this.state.numAttempts + ' results in a probability of: ' + calcResult);
     event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Outcome Probability
           <input name="outcomeProb" type="number" value={this.state.outcomeProb} onChange={this.handleChange} />
         </label>
         <label>
          Number of Attempts
           <input name="numAttempts" type="number" value={this.state.numAttempts} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
   }
 };

export default RNGCalc;
