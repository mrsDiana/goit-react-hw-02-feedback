export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button type="button" onClick={onLeaveFeedback}>
        {button}
      </button>
    );
  });
};
