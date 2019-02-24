import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content:'',
      _id: null
    };
  }
  static getDerivedStateFromProps(nextProps,prevState) {
    const {title, content, _id} = nextProps;
    if (nextProps._id != prevState._id) {
      return {
        title,
        content,
        _id
      }
    }
    else {
      return {
        ...prevState
      }
    }
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = () => {
    const {title, content,_id} = this.state;
    this.props.submitForm(title,content, _id);
    this.setState({
      title: '',
      content: '',
      _id: null
    });
  }

  render() {
    const {title, content} = this.state;

    return (
      <div className="modal">
        <div className="overlay"/>
        <div className="form">
          <h3>{this.props._id ? 'Edit' : 'Create a new'} note</h3>
          <div className="close" onClick={this.props.closeModal}>
            <i className="material-icons">
              close
            </i>
          </div>
          <input type="title" name="title" value={title} onChange={this.onChange} placeholder="Enter title" />
          <input type="content" name="content" value={content} onChange={this.onChange} placeholder="Enter your content" />
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  name: PropTypes.string
};

Modal.defaultProps = {
}

export default Modal
