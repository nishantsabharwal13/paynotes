import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, createNote, saveEditedNote, deleteNote } from '../../actions/notesAction';
import Note from '../../components/note';
import Modal from '../../components/modal';
import Cookies from '../../helpers/cookies';
class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      isLoggedin: false,
      title: '',
      content:'',
      _id: null
    };
  }

  componentDidMount() {
    this.props.getNotes();
    if (Cookies.read('login')) {
      this.setState({ isLoggedin: true })
    }
    else {
      this.props.history.replace('/login');
      this.setState({ isLoggedin: false });
    }
  }

  logout = () => {
    this.setState({ isLoggedin: false });
    Cookies.erase('login');
    this.props.history.replace('/login');

  }

  closeModal = () => {
    this.setState({ showModal: false });
  }
  
  submitForm = (title, content, _id) => {
    if(!_id) {
      this.props.createNote({title,content})
    } else {
      this.props.saveEditedNote(_id, { title, content})
    }
    this.closeModal();
  }

  editNote = note => {
    this.setState({
      showModal: true,
      title: note.title,
      content: note.content,
      _id: note._id
    })
  }

  deleteNote = id => {
    this.props.deleteNote(id);
  }

  render() {
    return (
      <div className="home-page">
        <div className="add-note" 
          onClick={() => this.setState({showModal : true,title: '',content:'', _id: null})}
        >
           + Add a new Note
        </div>
        {
          this.state.isLoggedin ? (
            <div className="logout"  onClick={this.logout}>Logout</div>
          ) : null
        }
        <Note 
          notes={this.props.notes}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
        />
        {
          this.state.showModal ? (
            <Modal
              submitForm={this.submitForm}
              title={this.state.title}
              content={this.state.content}
              _id={this.state._id}
              closeModal={this.closeModal}
            />
          ) : null
        }
      </div>
    )
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
      getNotes,
      createNote,
      saveEditedNote,
      deleteNote
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

