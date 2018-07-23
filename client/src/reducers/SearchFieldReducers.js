import { UPDATE_SEARCH_FIELD } from '../actions/types';

const INITIAL_STATE = {
  value: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      const newState = state;

      newState.value += action.payload;
      console.log('newState', newState)
      return newState;
    default: 
      return state;
  };
};