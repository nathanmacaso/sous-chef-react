const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('setting state');
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_ERROR':
      return {
        ...state,
        authError: 'Logout failed'
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;