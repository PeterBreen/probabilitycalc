import React, { Component } from 'react';
import './Intro.css';

/* define intro text sections */
function ProbabilityIntro() {
  return <div className="App-intro"><p>This is a tool for calculating the probability of getting a certain outcome at least once, within a given number of attempts.</p><p>For example, the probability of rolling a 3 on a 6-sided die is 16.67%. If you roll the die 25 times, the probability of rolling a 3 at least once is 98.95%.</p></div>;
}

 function DetermineIntro() {
  return <div className="App-intro"><p>This is a tool for determining the overall probability of an event based on one or multiple random chance events.</p><p>For example, the probability of rolling a 3 on a 6-sided die is 1/6, or 16.67%. An event that has a 1/2 followed by a 1/24 chance is 1/48, or 2.08%.</p></div>;
}
/*selector function to pick which text section to render based on props */
function IntroSelect(props) {
    const sect = props.section;
    if (sect === 'determine') {
      return <DetermineIntro />;
    } else if (sect === 'probability') {
    return <ProbabilityIntro />;
    } else {
      return <p>Error in section selection</p>;
    }
  };

class IntroText extends Component {
  render() {
    return (
      <div>
        {IntroSelect}
      </div>
    )};
  };

export default IntroText;
