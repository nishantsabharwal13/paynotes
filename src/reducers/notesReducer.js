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
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
  }
  return state;
}