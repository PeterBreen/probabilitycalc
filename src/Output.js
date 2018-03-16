import React, { Component } from 'react';
import './Output.css';

class Output extends Component {

 shouldComponentUpdate(nextProps) {
    const differentCalculated = this.props.calculated !== nextProps.calculated;
    return differentCalculated
  }

  render() {
    return (
      <div className="Output">
        <p>There is a ~<strong>{this.props.calculated}%</strong> chance of your outcome happening at least once in {this.props.attempts} attempts at {this.props.probability}% odds.</p>
      </div>
    )}
  };

export default Output;
