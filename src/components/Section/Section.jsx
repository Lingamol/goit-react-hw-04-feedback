import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <SectionWrapper title={title}>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
