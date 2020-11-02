import { combineReducers } from 'redux';
import songsReducer from './songs';
import profileReducer from './userProfile'
import userIdReducer from './userID'
import albumReducer from './album';
import artistReducer from './artist';


const rootReducer = combineReducers({
    songsReducer,
    profileReducer,
    userIdReducer,
    artistReducer,
    albumReducer,
});

export default rootReducer;