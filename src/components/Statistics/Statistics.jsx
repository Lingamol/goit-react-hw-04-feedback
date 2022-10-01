import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import { StatInfo, StatInfoItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatInfo>
      {total ? (
        <>
          <StatInfoItem>Good: {good}</StatInfoItem>
          <StatInfoItem>Neutral: {neutral}</StatInfoItem>
          <StatInfoItem>Bad: {bad}</StatInfoItem>
          <StatInfoItem>Total: {total}</StatInfoItem>
          <StatInfoItem percentage={positivePercentage}>
            Positive feedback: {positivePercentage}%
          </StatInfoItem>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatInfo>
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
