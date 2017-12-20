import React, { Component } from 'react';
import './Output.css';

class Output extends Component {

  constructor(props) {
     super(props);
     };

  render() {
    return (
      <div className="Output">
      <p>With a chance of {this.props.probability}% and {this.props.attempts} attempts, your total odds of the event happening at least once are {this.props.calculated}%.</p>
      </div>
    )}
  };

export default Output;
