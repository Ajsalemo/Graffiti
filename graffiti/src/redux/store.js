// --------------------------------- Imports ----------------------------- //
// --------------------------------------------------------------------- //

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// --------------------------------- Store ----------------------------- //
// --------------------------------------------------------------------- //

// Reducer
import loadImages from './reducers';

// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, loadImages)

// --------------------------------------------------------------------- //

export let store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export let persistor = persistStore(store)

// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //