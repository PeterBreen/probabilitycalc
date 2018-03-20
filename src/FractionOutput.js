import React, { Component } from 'react';
import './FractionOutput.css';

class FractionOutput extends Component {
  constructor(props) {
     super(props);
     this.state = {
       keyValue: 0
     };
   }

  render() {
    let itemId = 0;
    const numbers = this.props.data;
    const listItems = numbers.map((number) =>
    <div className="fraction-entry" key={itemId++}>{number[0]} <span className="fraction-line"></span> {number[1]}</div>
    );

    return (
      <div className="fraction-output">
          {listItems}
      </div>
    )}
  };

export default FractionOutput;
