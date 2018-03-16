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
    let listId = 0;
    const numbers = this.props.data;
    const listItems = numbers.map((number) =>
    <li key={listId++}>{number[0]} / {number[1]}</li>
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
