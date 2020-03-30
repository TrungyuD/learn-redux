import {combineReducers} from 'redux';
import user from './user';
// import dataUser from './dataUser';
// import dataRole from './dataRole';
// import dataAuth from './dataAuth';
import userInfo from './userInfo';
// import redux from './redux';
const allReducer = combineReducers({
    // redux,
    userInfo,
    redux : user
});

export default allReducer;