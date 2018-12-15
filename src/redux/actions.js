// --------------------------------- Imports ------------------------------ //
// ------------------------------------------------------------------------ //

import axios from 'axios';

import { LOAD_IMAGES_SUBMIT } from './types';

// ------------------------------------------------------------------------ //

export const returnUserSearch = query => {
    const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
    let searchTerm = query.toUpperCase();
    const graffiti = ' graffiti';

    const includesSearchTerm = searchTerm.includes(graffiti.toUpperCase());
    let properSearchTerm = searchTerm += graffiti.toUpperCase();

    const recontructedSearchTerm = !includesSearchTerm ? properSearchTerm : `${properSearchTerm.replace(/graffiti/gi, '')}${graffiti.toUpperCase()}`;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${recontructedSearchTerm}&per_page=100&format=json&nojsoncallback=1`;
    return dispatch => axios.get(url)
        .then(result => {
            dispatch({
                type: LOAD_IMAGES_SUBMIT,
                payload: result.data.photos.photo
            })
        })
        .catch(err => {
            console.log(err)
    })
};

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //

export const preDefinedNavbarSearch = e => {
    const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
    const conditions = ['tags', 'throw-ups', 'stencils', 'pieces'];

    // Data attributes and checking to see if it includes certain terms
    const dataAttr = e.target.attributes[1].value;
    const filterSearchTerms = conditions.some(e => dataAttr.includes(e));

    // Search terms converted to a string
    const searchByStyles = `graffiti ${dataAttr}`;
    const searchByCities = `${dataAttr} graffiti`;

    const preDefinedSearchTerm = filterSearchTerms ? searchByStyles : searchByCities;

    const preDefinedURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${preDefinedSearchTerm}&per_page=100&format=json&nojsoncallback=1`;
    
    return dispatch => axios.get(preDefinedURL)
        .then(result => {
            dispatch({
                type: LOAD_IMAGES_SUBMIT,
                payload: result.data.photos.photo
            })
        })
        .catch(err => {
            console.log(err)
    })
};

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //
