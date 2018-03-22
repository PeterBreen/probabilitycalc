import React, { Component } from 'react';
import './FractionOutput.css';

class FractionOutput extends Component {
  constructor(props) {
     super(props);
     this.state = {
       keyValue: 0
     };
     this.handleRemove = this.handleRemove.bind(this);
   }


  handleRemove(event) {
   const dataIndex = event.target.dataset.index
   console.log('data-index value: ', dataIndex);

 }

  render() {
    let itemId = 0; //needs to start at 0 to handle array index 0 ...
    const numbers = this.props.data;
    const listItems = numbers.map((number) =>
    <div className="fraction-entry" data-index={itemId} key={itemId++} onClick={this.handleRemove}>{number[0]} <span className="fraction-line"></span> {number[1]}</div>
    );

    return (
      <div className="fraction-output">
          {listItems}
      </div>
    )}
  };

export default FractionOutput;
