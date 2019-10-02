const initState = {
  pantryError: null
};

const pantryReducer = (state = initState, action) => {
  switch(action.type) {
    case 'PANTRY_ADD_SUCCESS':
      console.log('setting state');
      return {
        ...state,
        authError: null
      }
    case 'PANTRY_ADD_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default pantryReducer;