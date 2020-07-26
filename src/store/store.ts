import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import userReducer from "./user/reducer";
import rootSaga from "./user/sagas";

const rootReducer = combineReducers({
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>