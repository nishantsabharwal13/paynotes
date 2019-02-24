import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <img src="https://paynote.io/wp-content/themes/illdy/layout/images/5bec64af2255bd96e5cf1054_Paynote%20-%20New%20Blue.svg"/>
      </header>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
}

export default Header;