// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React, { Component } from 'react';

// Images
import parallax from '../../images/parallax.jpg';

// Components
import ImageDashboard from '../image-dashboard';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //
const backgroundImage = {
    style: {
        backgroundImage: `url(${parallax})`
    }
};

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.scrollFunction = this.scrollFunction.bind(this);
    }

    scrollFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
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
                            <ImageDashboard />
                            <div className="text-center mt-3">
                                <button 
                                    className="btn btn-top"
                                    onClick={this.scrollFunction}
                                >
                                    Back to top
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default HomeContent;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //