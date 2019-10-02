import _ from 'lodash';

export const pantryAdd = (ingredients) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();

    const userId = state.firebase.auth.uid;
    const userPantry = firestore.collection('pantries').where("userId", "==", userId);

    ingredients.forEach((ingredient) => {
      firestore.collection('ingredients').where("name", "==", ingredient).get()
        .then(snapshot => {
          if(snapshot.empty){
            firestore.collection('ingredients').doc(_.camelCase(ingredient)).set({name: ingredient})
          }
        })
        .catch((err) => {
          dispatch({ type: 'PANTRY_ADD_ERROR', err})
        })
    });

    userPantry.get()
      .then(snapshot => {
        console.log(snapshot);
        if(snapshot.empty){
          firestore.collection('pantries').doc(userId).set({
            userId: userId,
            pantryIngredients: [...ingredients]
          })
        }else {
          firestore.collection('pantries').doc(userId).update({
            pantryIngredients: firestore.FieldValue.arrayUnion(...ingredients)
          })
        }
      })
      .then(() => {
        dispatch({ type: 'PANTRY_ADD_SUCCESS'})
      })
      .catch((err) => {
        dispatch({ type: 'PANTRY_ADD_ERROR', err})
      })
    };
};

