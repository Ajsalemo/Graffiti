// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Images
import jumbotronOne from '../../images/jumbotron1.jpg';
import jumbotronTwo from '../../images/jumbotron2.jpg';
import jumbotronThree from '../../images/jumbotron3.jpg';
import jumbotronFour from '../../images/jumbotron4.jpg';
import jumbotronFive from '../../images/jumbotron5.jpg';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <Carousel
                    transitionTime={700}
                    autoPlay={true}
                    infiniteLoop={true}
                >
                    <div>
                        <img src={jumbotronOne} alt="Sidewalk wall of graffiti" />
                    </div>
                    <div>
                        <img src={jumbotronTwo} alt="Train with graffiti painted on it" />
                    </div>
                    <div>
                        <img src={jumbotronThree} alt="Wall of graffiti" />
                    </div>
                    <div>
                        <img src={jumbotronFour} alt="Wall of graffiti" />
                    </div>
                    <div>
                        <img src={jumbotronFive} alt="Wall of graffiti" />
                    </div>
                </Carousel>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-8 text-center">
                            <h1>A website showcasing urban art from around the world</h1>
                            <span>Search for a city directly in the search bar, or choose from the list of pre-defined cities or styles</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
            
// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Jumbotron;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //