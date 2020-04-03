import { all } from 'redux-saga/effects';
import { watchUser }  from './users';

export default function* rootSaga() {
    try {
        yield all([
            watchUser()
        ]);
    } catch (err) {
        console.log(err);
    }
};
