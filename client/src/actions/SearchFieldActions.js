import { UPDATE_SEARCH_FIELD } from './types';

export const updateMovieSearch = (movie) => {
  return {
    type: UPDATE_SEARCH_FIELD,
    payload: movie,
  };
};

