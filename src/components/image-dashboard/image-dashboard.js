// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';
import { connect } from "react-redux";

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

const ImageDashboard = props => {
    const { images } = props;

    return (
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
                    className="m-2 image-dashboard"
                />
            )
        })
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
