import axios from 'axios';
import { SEARCH_MOVIE } from './types';
import { tmdbAPIKey } from '../../../config.js'

export const searchMovie = (movie) => {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPIKey.apiKey}&query=${movie}`)
    .then(function (response) {
      const array = [];
      const data = response.data.results;
      for (let i = 0; i < data.length; i++) {
        if (data[i].poster_path !== null) {
          array.push(data[i])
        }
      }
      dispatch({ type: SEARCH_MOVIE, payload: array })
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }
};

