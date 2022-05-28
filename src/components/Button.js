import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  // const doSomething = (e) => {
  //   alert('WELCOME')
  // }

  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  doSomething: PropTypes.func.isRequired
}

export default Button;
