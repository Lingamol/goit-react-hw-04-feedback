import Notification from 'components/Notification';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
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
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
