import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section title={title}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
