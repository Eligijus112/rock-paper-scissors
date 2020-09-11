import { combineReducers } from "redux";
import changeSigns from './changeSigns';
import changeScore from './changeScore';

export default combineReducers({ changeSigns, changeScore });