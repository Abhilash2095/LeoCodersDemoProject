import {actionTypes} from './actionTypes';

const initialState = {
  userLogin: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        userLogin: action.payload,
      };
    default:
      return state;
  }
};
