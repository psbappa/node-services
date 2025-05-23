import { TOGGLE_AUTH } from '../actions__old';

const initialState = { isLoggedIn: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

export default authReducer;
