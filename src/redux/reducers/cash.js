import * as actionTypes from '../actions/actionTypes';

const inititalState = {
  cash: 0,
}

const cash = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CASH:
      return {...state, cash: state.cash + action.payload}
    case actionTypes.GET_CASH: 
      return {...state, cash: state.cash - action.payload}
    default: 
      return state
  }
}

export default cash;