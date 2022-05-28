import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
  const doSomething = () => {
    alert('YES')
  }
  // ({title, numbers}) to get attributes directly
  return (
    <header classNames='header'>
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      <h1>{props.title}</h1>
      <h2>{props.number}</h2>
      <Button color='blue' text='Add' doSomething={doSomething}/>
      <Button color='orange' text='Add'/>
      <Button color='red' text='Add'/>
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

// CSS IN REACT
// const headingStyle = {
//     color: 'purple',
//     backgroundColor: 'gray'
// }

export default Header;
