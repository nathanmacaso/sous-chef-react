export const createUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('users').add({
      ...user,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_USER', user })
    }).catch((err) => {
      dispatch({ type: 'CREATE_USER_ERROR', err })
    })
  }
};