import { combineReducers } from 'redux';
import SearchFieldReducers from './SearchFieldReducers';

export default combineReducers({
  searchField: SearchFieldReducers,
});