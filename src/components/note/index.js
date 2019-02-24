import React from 'react';
import PropTypes from 'prop-types';
import './note.scss';

class Note extends React.Component {


  render() {
    const renderNotes =
      this.props.notes.map((note, index) => (
        <div
          key={index}
          className="note"
        >
          <div className="title">{note.title}</div>
          <div className="content">{note.content}</div>
          <div className="operations">
            <div className="edit" onClick={() => this.props.editNote(note)} >Edit</div>
            <div className="delete" onClick={() => this.props.deleteNote(note._id)}>Delete</div>
          </div>
        </div>
      ));

    return (
      <div className="note-wrapper">
        {renderNotes}
      </div>
    )
  }
}

Note.propTypes = {
  name: PropTypes.string
};

Note.defaultProps = {
}

export default Note
