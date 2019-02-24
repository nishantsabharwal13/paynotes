import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, createNote, updateNote, deleteNote } from '../../actions/notesAction';
import Note from '../../components/note';
import Modal from '../../components/modal';
class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      title: '',
      content:'',
      _id: null
    };
  }

  componentDidMount() {
    this.props.getNotes();
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }
  
  submitForm = (title, content, _id) => {
    if(!_id) {
      this.props.createNote({title,content})
    } else {
      this.props.updateNote(_id, { title, content})
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
      updateNote,
      deleteNote
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

