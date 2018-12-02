// --------------------------------- Imports ------------------------------ //
// ------------------------------------------------------------------------ //

import { LOAD_IMAGES_SUBMIT } from './types';

// --------------------------------- Reducers ------------------------------ //
// ------------------------------------------------------------------------ //

const initialState = {
    images: []
};

const loadImages = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_IMAGES_SUBMIT:
            return {
                state: action.payload
            }
        default:
            return state;
    }
};

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //

export default loadImages;

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //