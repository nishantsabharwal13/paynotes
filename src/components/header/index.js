import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

import Cookies from '../../helpers/cookies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedin: false
    };
  }


  componentDidMount() {
    if(Cookies.read('login')) {
      this.setState({ isLoggedin: true })
    } 
    else {
      this.setState({ isLoggedin: false });
    }
  }

  logout = () => {
    this.setState({ isLoggedin: false });
    Cookies.erase('login');
    this.props.history.replace('/login');

  }

  render() {
    return (
      <header>
        <img src="https://paynote.io/wp-content/themes/illdy/layout/images/5bec64af2255bd96e5cf1054_Paynote%20-%20New%20Blue.svg"/>
        {
          this.state.isLoggedin ? (
          <button onClick={this.logout}>LOGOUT</button>
          ) :null 
        }
      </header>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
}


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);