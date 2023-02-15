import { combineReducers } from "redux";

import postReducers from './postReducers';
import authReducers from './authReducers';

export default combineReducers({
    postReducers, //normally it looks like this post:postReducers, since key and value are the same, they are represented this way
    authReducers
})