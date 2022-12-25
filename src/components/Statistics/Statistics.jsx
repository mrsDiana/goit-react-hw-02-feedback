import { Box } from 'components/Box';
import { Txt } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box display="grid" gridGap="10px" justifyItems="start" fontSize="30px">
      <Txt>Good: {good}</Txt>
      <Txt>Neutral: {neutral}</Txt>
      <Txt>Bad: {bad}</Txt>
      <Txt>Total: {total}</Txt>
      <Txt>Positive feedback: {positivePercentage}%</Txt>
    </Box>
  );
};
