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
      <p>With a chance of <strong>{this.props.probability}%</strong> and <strong>{this.props.attempts}</strong> attempts, your total odds of the event happening at least once are <strong>{this.props.calculated}%</strong>.</p>
      </div>
    )}
  };

export default Output;
