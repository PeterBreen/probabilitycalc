# Probability Calculator

A React application to help calculate RNG probabilities. True random (or even psuedorandom) does not operate the way the human brain does, but knowing the odds can help. This app has two modules aimed at determining and then solving for the outcome of RNG-based events, such as lootboxes (topical!) or similar.

The first is a probability calculator: Just enter your probability, in percent, and how many attempts you want to make, and it'll tell you the chances you'll succeed at least once.

The second is a probability determinator: Enter the odds of each event as fractions and it will return a final probability, in percent, which will tell you the overall outcome of all your events in sequence.

The determinator is meant to return results useful for the probability calculator. For example, if you know an event happens only after a 1/2 and 1/24 roll, you can determine the probability is approximately 2.083%. And if you know you have 9 attempts at 2.083%, you know you have approximately a 17.259% chance for a successful outcome to happen at least once.

random: it's easy for programmers, but hard for the users. There's a lesson in this, I'm sure.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
