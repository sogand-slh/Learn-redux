const increase = (value = 1) => {
  return { type: "INCREASE", payload: value };
};

const decrease = (value = 1) => {
  return { type: "DECREASE", payload: value };
};

export { increase, decrease };
