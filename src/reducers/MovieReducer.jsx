export const movieReducer = (state, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };

    case "UPDATE_STARRED_WATCHLIST":
      return { ...state, [action.payload.key]: action.payload.value };

    default:
      return { state };
  }
};
