import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Statistics/Notification';

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
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };
  countPositiveFeedbackPercentage = total => {
    return ((this.state.good / total) * 100).toFixed(0);
  };
  render() {
    const total = this.countTotalFeedback();
    const raiting = this.countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          width: '500px',
          margin: '0 auto',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addStatistics}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={raiting}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
