import PropTypes from 'prop-types';
import { Txt } from './Statistics.styled';

export const Notification = ({ message }) => <Txt>{message}</Txt>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
