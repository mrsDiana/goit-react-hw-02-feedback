import PropTypes from 'prop-types';
import { ButtonStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: `20px`,
      }}
    >
      {options.map(button => {
        return (
          <ButtonStyle key={button} type="button" onClick={onLeaveFeedback}>
            {button}
          </ButtonStyle>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}.isRequired;
