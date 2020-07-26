import { put, takeEvery, all, call, take, select, delay  } from 'redux-saga/effects'
import {GET_USER} from "./constants";
import {setUser, toggleProgress} from "./actions";
import {GetUser} from "./types";

function* getUserAsync(action: GetUser) {
    try {
        yield put(toggleProgress(true))
        const response  =  yield call(() => fetch('https://randomuser.me/api/'))
        const json = yield call(() => response.json())
        const user = json.results[0].name
        // yield delay(2000)
        yield put(toggleProgress(false))
        yield put(setUser(user))
    } catch (err) {
        console.log(err)
    }
}

function* watchAndLog() {
    while (true) {
        const action = yield take('*')
        console.log('action', action)

        const state = yield select()
        console.log('state', state)
    }
}

export default function* rootSaga() {
    yield all([
        watchAndLog(),
        yield takeEvery(GET_USER, getUserAsync)
    ])
}