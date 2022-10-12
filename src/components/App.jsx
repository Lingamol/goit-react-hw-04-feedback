import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total ? total : 0;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const FeedbackpositivePercentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      <Section
        title={'Statistics'}
        children={
          totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={FeedbackpositivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )
        }
      />
    </div>
  );
};
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     const total = values.reduce((previousValue, number) => {
//       return previousValue + number;
//     }, 0);
//     return total ? total : 0;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();
//     const FeedbackpositivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section
//           title={'Please leave feedback'}
//           children={
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={this.onLeaveFeedback}
//             />
//           }
//         />
//         <Section
//           title={'Statistics'}
//           children={
//             totalFeedback ? (
//               <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={totalFeedback}
//                 positivePercentage={FeedbackpositivePercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )
//           }
//         />
//       </div>
//     );
//   }
// }
