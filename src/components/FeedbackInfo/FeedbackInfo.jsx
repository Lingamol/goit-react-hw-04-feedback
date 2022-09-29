import PropTypes from 'prop-types';
import { Component } from 'react';

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
    this.setState({ bad: this.state.bad + 1 });
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleOnClickGood}>Good</button>
          <button onClick={this.handleOnClickNeutral}>Neutral</button>
          <button onClick={this.handleOnClickBad}>Bad</button>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
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
