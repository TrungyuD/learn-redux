import {  takeLatest, put, call } from 'redux-saga/effects';
import { getListRoleSuccess } from '../actions'

export function* getRoleListSaga() {
    const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/role';
    const getTokenType = localStorage.getItem('token_type');
    const getAccessToken = localStorage.getItem('access_token');
    try {
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        const response = yield call(fetch, url, { headers });
        const data = yield response.json();
        console.log(data.body);
        yield put(getListRoleSuccess(data.body));
    } catch (error) {
        console.log(error);
    }
}

export function* watchRole() {
    yield takeLatest('GET_LIST_ROLE_START', getRoleListSaga);
}