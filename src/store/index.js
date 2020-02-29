import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeArgs = [applyMiddleware(sagaMiddleware)];

if ((process.env.NODE_ENV === 'development') && (window.__REDUX_DEVTOOLS_EXTENSION__)) {
    composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
    rootReducer,
    compose(...composeArgs)
);

sagaMiddleware.run(rootSaga);

export default store;