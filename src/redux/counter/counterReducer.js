const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 5,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 2 : state.counter,
      };
    default:
      return state;
  }
};
export default counterReducer;
