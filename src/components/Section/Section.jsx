import PropTypes from 'prop-types';
const Section = ({ name, children }) => {
  return (
    <section name={name}>
      <h2>{name}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
