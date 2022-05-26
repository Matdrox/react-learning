import PropTypes from 'prop-types';

const Header = (props) => {
  // ({title, numbers}) to get attributes directly
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
      <h2>{props.number}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
  number: 0,
};

Header.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

const headingStyle = {
    color: 'purple',
    backgroundColor: 'gray'
}

export default Header;
