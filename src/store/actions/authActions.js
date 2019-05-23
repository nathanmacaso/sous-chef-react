export const createUser = (user) => {
  return (dispatch, getState) => {
    // make async call to db
    dispatch({ type: 'CREATE_USER', user});
  }
};