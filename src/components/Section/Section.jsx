import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
  // console.log(children);
  return (
    <section
      style={{
        textAlign: 'center',
      }}
    >
      <Box as="h2" fontSize="40px" m="0" p="50px 0">
        {title}
      </Box>
      {children}
    </section>
  );
};
