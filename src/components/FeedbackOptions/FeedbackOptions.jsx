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
      {options.map((button, i) => {
        return (
          <ButtonStyle key={button[i]} type="button" onClick={onLeaveFeedback}>
            {button}
          </ButtonStyle>
        );
      })}
    </div>
  );
};
