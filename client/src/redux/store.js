// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import logger from 'redux-logger';

// const store = createStore(rootReducer, applyMiddleware(logger));

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});

export default store;
