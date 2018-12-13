// --------------------------------- Imports ------------------------------ //
// ------------------------------------------------------------------------ //

import axios from 'axios';

import { LOAD_IMAGES_SUBMIT } from './types';

// ------------------------------------------------------------------------ //

export const returnMostRecent = query => {
    const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
    let searchTerm = query.toUpperCase();
    const graffiti = 'graffiti';

    const includesSearchTerm = searchTerm.includes(graffiti.toUpperCase());
    let properSearchTerm = searchTerm += graffiti.toUpperCase();

    const recontructedSearchTerm = !includesSearchTerm ? properSearchTerm : `${properSearchTerm.replace(/graffiti/gi, '')}${graffiti.toUpperCase()}`;
      
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${recontructedSearchTerm}&per_page=100&format=json&nojsoncallback=1`;
    console.log(url);
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
