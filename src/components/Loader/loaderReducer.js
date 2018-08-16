const types = {
  markAppLoaded: 'markAppLoaded',
};

export const selector = state => state.loaderReducer.isAppLoaded;

export const markAppLoaded = () => ({
  type: types.markAppLoaded,
});

const initialState = {
  isAppLoaded: false,
};

const loaderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.markAppLoaded:
      return {
        ...state,
        isAppLoaded: true,
      };

    default:
      return state;
  }
};

export default loaderReducer;
