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
        notes: [...action.payload.notes],
      };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: [...action.payload.notes],
      };
  }
  return state;
}