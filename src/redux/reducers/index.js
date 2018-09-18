import { combineReducers } from 'redux';
import wordsReducer from './words';
import selectedReducer from './selected';
import filtersReducer from './filters';


export default combineReducers({
  words: wordsReducer,
  selected: selectedReducer,
  filters: filtersReducer
});
