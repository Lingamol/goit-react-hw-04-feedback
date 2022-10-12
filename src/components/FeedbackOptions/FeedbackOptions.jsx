import PropTypes from 'prop-types';
import {
  OptionBtnList,
  OptionBtnListItem,
  OptionBtn,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionBtnList>
      {options.map(option => (
        <OptionBtnListItem key={option}>
          <OptionBtn
            optionColor={option}
            onClick={event => onLeaveFeedback(event)}
            name={option}
          >
            {option}
          </OptionBtn>
        </OptionBtnListItem>
      ))}
    </OptionBtnList>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
