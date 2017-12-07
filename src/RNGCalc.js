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
     alert('Outcome Probability: ' + this.state.outcomeProb + ' Number of Attempts: ' + this.state.numAttempts);
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
