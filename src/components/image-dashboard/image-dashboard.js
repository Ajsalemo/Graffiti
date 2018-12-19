// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';
import { connect } from 'react-redux';

// Images
import notfound from '../../images/notfound.jpg'

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

const ImageDashboard = props => {
    const { images } = props;

    return (
        images.length ? 
            images.map((image, i) => {
                const id = image.id;
                const secret = image.secret;
                const server = image.server;
                const farm = image.farm;
                const title = image.title;
        
                return (
                    <img 
                        key={i} 
                        src={`http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} 
                        alt={title} 
                        className="m-2 image-dashboard img-fluid"
                    />
                )
            })
        :
        <div>
            <img  
                src={notfound} 
                alt='Not found' 
                className="m-2 image-dashboard"
            />
            <span className="no-results m-3">It seems you haven't searched for anything yet - or nothing was found. Try searching for a term, city, or choose from a list of pre-defined searches in the searchbar dropdown menu</span>
        </div>
    )
};

// ---------------------------------------------------------------------- //

const mapStateToProps = state => {
    return {
        images: state.loadImages.images
    }
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default connect(mapStateToProps)(ImageDashboard);

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //
