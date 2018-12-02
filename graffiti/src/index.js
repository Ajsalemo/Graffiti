// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

// SASS
import '../src/css/sass.css';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //


// ---------------------------------------------------------------------- //
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
// ---------------------------------------------------------------------- //
