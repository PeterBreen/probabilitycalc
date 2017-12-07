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
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Outcome Probability
           <input type="number" value={this.state.outcomeProb} onChange={this.handleChange} />
         </label>
         <label>
          Number of Attempts
           <input type="number" value={this.state.numAttempts} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
   }
 };

export default RNGCalc;
