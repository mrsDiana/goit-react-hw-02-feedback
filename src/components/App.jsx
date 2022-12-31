import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { good, neutral, bad } = this.state;
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
              good={good}
              neutral={neutral}
              bad={bad}
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

App.propTypes = {
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  addStatistics: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  total: PropTypes.number,
  raiting: PropTypes.string,
};
