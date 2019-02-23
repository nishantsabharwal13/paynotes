import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {

  }

  render() {
    return <h1>Let us Header</h1>;
  }
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
}

export default Header;
