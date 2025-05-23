// Old code

// import { combineReducers } from 'redux';
// import counterReducer from './counterReducer__old';
// import authReducer from './authReducer__old';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   auth: authReducer
// });

// export default rootReducer;

// New redux 
import { combineReducers } from 'redux';
import counterReducer from '../slices/counterSlice';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export default rootReducer;
