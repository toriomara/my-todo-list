import { combineReducers } from 'redux';
import projects from './projects';
import cash from './cash';

export default combineReducers({
  projects,
  cash,
});