// --------------------------------- Imports ----------------------------- //
// --------------------------------------------------------------------- //

import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// --------------------------------- Store ----------------------------- //
// --------------------------------------------------------------------- //

// Reducers
import loadImages from './reducers';

const rootReducer = combineReducers({
    loadImages,
    form: formReducer
});

// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

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