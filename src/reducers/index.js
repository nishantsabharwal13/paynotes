import { combineReducers } from 'redux';

import { notesReducer } from './notesReducer';

//combine reducers
export default combineReducers({
  notes: notesReducer,
});
