import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
  return (
    <section
      style={{
        textAlign: 'center',
      }}
    >
      <Box as="h2" fontSize={6} m="0" p="50px 0">
        {title}
      </Box>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}.isRequired;
