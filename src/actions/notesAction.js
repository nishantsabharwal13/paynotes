
export function getNotes(callback) {
  return function (dispatch) {
    fetch('/api/notes')
      .then(res => res.json())
      .then(res => {

        dispatch({ type: 'GET_NOTES', payload: res });
        typeof callback != 'undefined' ? callback() : null;
      })
      .catch(err => {
        dispatch({
          type: 'GET_NOTES_REJECTED',
          payload: 'there was error getting notes'
        });
      });
  };
}

export function createNote(note, callback) {
  return function (dispatch) {
    fetch('/api/note', {
      method: 'POST',
      body: JSON.stringify(note)
    })
      .then(res => {
        dispatch({ type: 'CREATE_NOTE', payload: res.data });
        typeof callback != 'undefined' ? callback() : null;
      })
      .catch(err => {
        dispatch({ type: 'CREATE_NOTE_REJECTED', payload: 'there was error creating note' });
      });
  };
}


export function updateNote(_id, note, callback) {
  return function (dispatch) {
    fetch(`/api/notes/${_id}`, {
      method: 'PUT',
      body: JSON.stringify(note)
    })
      .then(res => {
        dispatch({ type: 'UPDATE_NOTE', payload: res.data });
        typeof callback != 'undefined' ? callback() : null;
      })
      .catch(err => {
        dispatch({
          type: 'UPDATE_NOTE_REJECTED',
          payload: 'there was error updating note'
        });
      });
  };
}