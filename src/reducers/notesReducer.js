export function notesReducer(
  state =
    {
      notes: [],
      count: 0
    }, action) {

  switch (action.type) {
    case 'GET_NOTES':
      return {
        ...state,
        notes: [...action.payload.notes],
        count: action.payload.count,
      };
    case 'CREATE_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
    case 'UPDATE_NOTE':
      const currentNoteToUpdate = state.notes;
      const indexToUpdate = currentNoteToUpdate.findIndex((note) => note._id === action.payload.note._id);
      let noteUpdate = [...currentNoteToUpdate.slice(0, indexToUpdate), action.payload.note , ...currentNoteToUpdate.slice(indexToUpdate + 1)];
      
      return {
        ...state,
        notes: [...noteUpdate],
      };
    case 'DELETE_NOTE':
      const currentNoteToDelete = state.notes;
      const indexToDelete = currentNoteToDelete.findIndex((note) => note._id === action.payload);
      let noteUpdated = [...currentNoteToDelete.slice(0, indexToDelete), ...currentNoteToDelete.slice(indexToDelete + 1)];
      
      return {
        ...state,
        notes: [...noteUpdated],
      };
  }
  return state;
}