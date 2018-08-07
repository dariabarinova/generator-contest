const types = {
  markFontLoaded: 'markFontLoaded',
};

export const selector = state => state.fontLoadReducer.isFontsLoaded;

export const markFontLoaded = () => ({
  type: types.markFontLoaded,
});

const initialState = {
  isFontsLoaded: false,
};

const fontLoadReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.markFontLoaded:
      return {
        ...state,
        isFontsLoaded: true,
      };

    default:
      return state;
  }
};

export default fontLoadReducer;
