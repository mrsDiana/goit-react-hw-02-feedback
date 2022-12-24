import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addStatistics = e => {
    const feedback = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  };
  // countPositiveFeedbackPercentage = () => {
  //   // const rating = p.dataset.total;
  //   return rating;
  // };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          // onLeaveFeedback={addStatistics}
        />

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        {/* <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p> */}
      </div>
    );
  }
}
