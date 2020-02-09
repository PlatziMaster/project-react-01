const INITIAL_STATE = {
  profile: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'get_data':
      return { ...state, profile: action.payload };
    default: return state;
  }
};
