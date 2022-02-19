const initialState = {
  number: 10,
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUM":
      return {
        ...state,
        number: state.number + 5,
      };
    case "DECREASE_NUM":
      return {
        ...state,
        number: state.number > 0 ? state.number - 2 : state.number,
      };
    default:
      return state;
  }
};
export default numberReducer;
