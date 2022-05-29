import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = (props) => {
  const location = useLocation();
  // const onClick = () => {
  //   alert('YES')
  // }
  // ({title, numbers}) to get attributes directly
  return (
    <header classNames='header'>
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      <h1>{props.title}</h1>
      <h2>{props.number}</h2>
      {location.pathname === '/' && (
        <Button
          color={props.showAdd ? 'violet' : 'blue'}
          text={props.showAdd ? 'Close' : 'Open'}
          onClick={props.onAdd}
        />
      )}
      {location.pathname === '/' && <Button color='orange' text='Add' />}
      {location.pathname === '/' && <Button color='red' text='Add' />}
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
