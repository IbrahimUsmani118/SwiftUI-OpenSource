import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you're using Redux Thunk middleware

import rootReducer from './reducers';

const initialState = {}; // Initial state for your application

// Create the Redux store with middleware
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk) // Add any middleware you need
);

export default store;
