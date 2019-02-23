import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    
  }

  render() {
    return <div>Let us Header</div>;
  }
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
}

export default Header;
