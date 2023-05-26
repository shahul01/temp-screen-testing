import PropTypes from "prop-types";
const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};
Header.defaultProps = {
  title: "Movie Catalogue"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
