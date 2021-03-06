import React, { Component } from 'react';
import './RNGCalc.css';
import Output from './Output'

class RNGCalc extends Component {

  constructor(props) {
     super(props);
     this.state = {
       outcomeProb: 0,
       numAttempts: 0,
       calcVal: 0,
       outputDisplay: false,
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
     return odds.toFixed(3);
   }

   handleSubmit(event) {
     const calcResult = this.probabilityCalc(this.state.outcomeProb, this.state.numAttempts);
     this.setState({calcVal: calcResult,
     outputDisplay: true
    });
     event.preventDefault();
   }

   render() {
     return (
       <div className="RNGCalc">
         <form onSubmit={this.handleSubmit}>
           <label>
             Outcome Probability <br />
           <input id="outcomeProb" name="outcomeProb" type="number" value={this.state.outcomeProb} onChange={this.handleChange} /><span className="hint">%</span>
           </label>
           <label>
            Number of Attempts <br />
             <input name="numAttempts" type="number" value={this.state.numAttempts} onChange={this.handleChange} />
           </label>
           <input type="submit" value="Calculate" />
         </form>
         {this.state.outputDisplay && <Output probability={this.state.outcomeProb} attempts={this.state.numAttempts} calculated={this.state.calcVal} shouldDisplay={this.state.outputDisplay}/>}
       </div>
     );
   }
 };

export default RNGCalc;
