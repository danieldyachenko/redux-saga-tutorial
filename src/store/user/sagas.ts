import { put, takeEvery, all, call  } from 'redux-saga/effects'
import {GET_USER} from "./constants";
import {setUser} from "./actions";

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* getUserAsync() {
    try {
        const response  =  yield call(() => fetch('https://randomuser.me/api/'))
        const json = yield call(() => response.json())
        const user = json.results[0].name
        console.log(user)
        yield put(setUser(user))
    } catch (err) {
        console.log(err)
    }
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        yield takeEvery(GET_USER, getUserAsync)
    ])
}