// Define your reducers here
// Example:
const initialState = {
    counter: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter + 1,
        };
      case 'DECREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  