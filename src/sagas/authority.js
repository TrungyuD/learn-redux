import {  takeLatest, put, call } from 'redux-saga/effects';
import { getListAuthSuccess } from '../actions'

export function* getAuthListSaga() {
    const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/authority';
    const getTokenType = localStorage.getItem('token_type');
    const getAccessToken = localStorage.getItem('access_token');
    try {
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        const response = yield call(fetch, url, { headers });
        const data = yield response.json();
        yield put(getListAuthSuccess(data.body));
    } catch (error) {
        console.log(error);
    }
}

export function* watchAuth() {
    yield takeLatest('GET_LIST_AUTH_START', getAuthListSaga);
}