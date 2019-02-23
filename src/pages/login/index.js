import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {

  }

  render() {
    return <h1>Let us login</h1>;
  }
}

Login.propTypes = {
  name: PropTypes.string
};

Login.defaultProps = {
}

export default Login;
