const InitialState = {
  meteo: {
    content: null,
  },
  settimana: {
    content: null,
  },
  coord: {
    content: [],
  },
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
