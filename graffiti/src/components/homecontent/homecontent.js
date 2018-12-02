// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';

// Images
import parallax from '../../images/parallax.jpg';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //
const backgroundImage = {
    style: {
        backgroundImage: `url(${parallax})`
    }
};

const HomeContent = () => {
    return (
        // ----------------------------------------- Parallax ----------------------------------------- //
        <div>
            <div className="container-fluid parallax">
                <div className="row">
                    <div className="col-md-12">
                        <section>
                            <div className="parallax-image" style={backgroundImage.style}></div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-top">Back to top</button>
                    </div>
                </div>
            </div>
        </div>    
    )
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default HomeContent;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //