const initState = {
  auth: {
      isLoggedIn: false,
  }
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case('CREATE_USER'):
      console.log(action)
  }

  return state;
}

export default authReducer;