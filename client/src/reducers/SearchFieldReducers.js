import { SEARCH_MOVIE } from '../actions/types';

const INITIAL_STATE = {
  value: '',
  searchedMovieList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      const newState = state;

      newState.searchedMovieList = action.payload;
      return newState;
    default: 
      return state;
  };
};