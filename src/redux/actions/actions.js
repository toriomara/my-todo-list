import { ADD_PROJECT, DELETE_PROJECT, ADD_CASH, GET_CASH } from './actionTypes';

export const addProjectAction = (title) => {
  return { 
    type: ADD_PROJECT,
    payload: {
      id: new Date().toISOString(),
      title,
    }
  }
}

export const deleteProjectAction = (id) => {
  return { 
    type: DELETE_PROJECT, 
    payload: id
  }
}

export const addCashAction = (cash) => {
  return { 
    type: ADD_CASH, 
    payload: cash
  }
}

export const getCashAction = (cash) => {
  return { 
    type: GET_CASH, 
    payload: cash
  }
}

// ФЛАГИ УГАДЫВАТЬ (С ВАРИАНТАМИ) 

// export const setError = (error) => {
//     return{ 
//         type: actionTypes.SET_ERROR, 
//         error: error 
//     }
// }
// export const setItem = (item) => {
//     return{ 
//         type: actionTypes.SET_ITEM, 
//         item: item 
//     }
// }
// export const setEdit = () => {
//     return{ 
//         type: actionTypes.SET_EDIT
//     }
// }