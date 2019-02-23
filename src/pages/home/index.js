import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes } from '../../actions/notesAction';

class Home extends React.Component {
  state = {

  }
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return <h1>Let us home</h1>;
  }
}

Home.propTypes = {
  name: PropTypes.string
};

Home.defaultProps = {
}

function mapStateToProps(state) {
  return {
    notes: state.notes.notes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getNotes: getNotes,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

