import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div className="nav">
      <a href="./">Tracker</a>
      <a href="/About">About</a>
      <br />
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in Js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
