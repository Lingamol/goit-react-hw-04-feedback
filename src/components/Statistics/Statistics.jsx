import { Notification } from 'components/Notification/Notification';

// import PropTypes from 'prop-types';
import(Notification);
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        {total ? (
          <>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>total: {total}</span>
            <span>positivePercentage: {positivePercentage} % </span>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
}
