import {  takeLatest, put, call } from 'redux-saga/effects';
import { getListUerSuccess } from '../actions'

export function* getUserListSaga() {
    const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/user';
    const getTokenType = localStorage.getItem('token_type');
    const getAccessToken = localStorage.getItem('access_token');
    try {
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        const response = yield call(fetch, url, { headers });
        const data = yield response.json();
        yield put(getListUerSuccess(data.body));
    } catch (error) {
        console.log(error);
    }
}

export function* watchUser() {
    yield takeLatest('GET_LIST_USER_START', getUserListSaga);
}