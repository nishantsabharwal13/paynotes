import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/loginAction';
import Cookies from '../../helpers/cookies';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }
  componentDidMount() {
    if (Cookies.read('login')) {
      this.props.history.replace('/');
    }
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = () => {
    const { email, password} = this.state;
    this.props.login(email, password, this.loginCallback);
  }

  loginCallback = res => {

    if(res.success)  {
      Cookies.create('login', true);
      this.setState({errorMessage: ''})
      this.props.history.replace('/');
    } else {
      this.setState({
        email: '',
        password: '',
        errorMessage: res.message
      });
    }
  }
  
  render() {
    const {email, password, errorMessage } = this.state;
    return (
        <div className="login-page">
          <div className="login-tab">
            <div className="title">
              Welcome to <span>PayNote</span>
            </div>
            <div className="description">
             Login to Pay Note
            </div>
            <div className="login-form">
              <div className="form">
                <input type="email" name="email" value={email} onChange={this.onChange} placeholder="Enter your email-id" />
                <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Enter your password" />
                <button type="submit" onClick={this.onSubmit}>Submit</button>
              </div>
            </div>
            <div className="error-message">{errorMessage}</div>
          </div>
        </div>
    )
  }
}

Login.propTypes = {
  name: PropTypes.string
};

Login.defaultProps = {
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: login,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

