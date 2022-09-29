import PropTypes from 'prop-types';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';

// import FriendListItem from '../FriendListItem/FriendListItem';
// import { List, Item } from './FriendList.styled';

export class FeedbackInfo extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClickGood = event => {
    console.log('Good');
    this.setState({ good: this.state.good + 1 });
  };
  handleOnClickNeutral = event => {
    this.setState({ neutral: this.state.neutral + 1 });
    console.log('Neutral');
  };
  handleOnClickBad = event => {
    console.log('Bad');
    this.setState({ bad: +1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleOnClickGood}>Good</button>
          <button onClick={this.handleOnClickNeutral}>Neutral</button>
          <button onClick={this.handleOnClickBad}>Bad</button>
          {/* <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span> */}
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}
// function FriendList({ friends }) {
//   return (
//     <List>
//       {friends.map(item => (
//         <Item key={item.id}>
//           <FriendListItem item={item} />{' '}
//         </Item>
//       ))}
//     </List>
//   );
// }
// export default FriendList;
// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ),
// };