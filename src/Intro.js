import React, { Component } from 'react';
import './Intro.css';

class IntroText extends Component {

  render() {
    const sectionName = this.props.section;

    let sectionText = null;
    if (sectionName === 'determine') {
      sectionText = <div className="App-intro"><p>This is a tool for determining the percentage odds of an event based on one or multiple known chance events.</p><p>For example, the probability of rolling a 3 on a 6-sided die is 1/6, or 16.67%. An event that has a 1/2 followed by a 1/24 chance is 1/48, or 2.08%.</p></div>;
    } else if (sectionName === 'probability') {
      sectionText = <div className="App-intro"><p>This is a tool for calculating the probability of getting a certain outcome at least once, within a given number of attempts.</p><p>For example, the probability of rolling a 3 on a 6-sided die is 16.67%. If you roll the die 25 times, the probability of rolling a 3 at least once is 98.95%.</p></div>;
    } else {
      sectionText = <p>Error in section selection.</p>
    };

    return (
      <div>
        {sectionText}
      </div>
    )};
  };

export default IntroText;
