// --------------------------------- Imports ------------------------------ //
// ------------------------------------------------------------------------ //

import axios from 'axios';

import { LOAD_IMAGES_SUBMIT } from './types';

// ------------------------------------------------------------------------ //

export const returnMostRecent = query => {
    const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=100&format=json&nojsoncallback=1`;

    return dispatch => axios.get(url)
        .then(result => {
            dispatch({
                type: LOAD_IMAGES_SUBMIT,
                payload: result.data.photos.photo
            })
            console.log(result.data.photos.photo)
        })
        .catch(err => {
            console.log(err)
    })
};

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //
