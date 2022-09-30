import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = ['good', 'neutral', 'bad'];

  onLeaveFeedback = type => {
    // console.log(type);
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total ? total : 0;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section
          name={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={this.options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        <Section
          name={'Statistics'}
          children={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </div>
    );
  }
}
