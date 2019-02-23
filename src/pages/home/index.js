import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  state = {

  }

  render() {
    return <h1>Let us login</h1>;
  }
}

Home.propTypes = {
  name: PropTypes.string
};

Home.defaultProps = {
}

export default Home;
