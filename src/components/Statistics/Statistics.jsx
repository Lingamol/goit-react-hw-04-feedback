// import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>total: {total}</span>
        <span>positivePercentage: {positivePercentage} %</span>
      </div>
    </div>
  );
}
