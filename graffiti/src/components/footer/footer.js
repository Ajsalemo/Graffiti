// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';

// Images
import bootstrap from '../../images/bootstrap-solid.svg';

// ---------------------------------------------------------------------- //

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pb-5">
                <div className="row text-center">
                    <div className="col-md-4 mt-4">
                        <h3>Technologies</h3>
                        <a href="https://reactjs.org/" className="mt-2 mb-2">
                            <span className="footer-text pr-1">React.js</span><i className="fab fa-react fa-2x"></i>
                        </a>
                        <a href="https://nodejs.org/en/" className="mt-2 mb-2">
                            <span className="footer-text pr-1">Node.js</span><i className="fab fa-node fa-2x"></i>
                        </a>
                        <a href="https://sass-lang.com/" className="mt-2 mb-2">
                            <span className="footer-text pr-1">SASS</span><i className="fab fa-sass fa-2x"></i>
                        </a>
                        <a href="https://getbootstrap.com/" className="mt-2">
                            <span className="footer-text pr-1">Bootstrap</span><img src={bootstrap} alt="Bootstrap logo" width="20" height="20"/>
                        </a>
                    </div>
                    <div className="col-md-4 mt-4">
                        <h3>Resources</h3>
                        
                    </div>
                    <div className="col-md-4 mt-4">
                        <h3>Galleries</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Footer;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //