import React, { Component } from 'react';
import './FractionOutput.css';

class FractionOutput extends Component {
  constructor(props) {
     super(props);
  }


  render() {
    const numbers = this.props.data;
    const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
    );

    return (
      <div className="fraction-output">
      <ul>
        {listItems}
      </ul>
      </div>
    )}
  };

export default FractionOutput;

//iterate through the array so that at each key you display num / den, not just num den.
//wrap each one in a div or something with a key that can go back to the array on submit and slice out an index
