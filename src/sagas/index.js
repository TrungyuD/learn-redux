import { all } from 'redux-saga/effects';
import { watchUser}  from './users';
import {watchRole} from './roles';
import {watchAuth} from './authority';

export default function* rootSaga() {
    try {
        yield all([
            watchRole(),
            watchUser(),
            watchAuth()
        ]);
    } catch (err) {
        console.log(err);
    }
};

