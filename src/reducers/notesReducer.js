export function notesReducer(
  state =
    {
      notes: [],
      count: 0
    }, action) {

  switch (action.type) {
    case 'GET_FABRICS':
      return {
        ...state,
        notes: [...action.payload.fabrics],
        count: action.payload.count,
      };
  }
  return state;
}