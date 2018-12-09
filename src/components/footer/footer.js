// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';

// Images
import bootstrap from '../../images/bootstrap-solid.svg';
import streetartnyc from '../../images/streetartnyc.PNG';
import graffitistreet from '../../images/graffitistreet.jpg';
import ekosystem from '../../images/ekosystem.gif';
import artcrimes from '../../images/artcrimes.gif';
import streetpins from '../../images/streetpins.jpg';

// ---------------------------------------------------------------------- //

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mt-4 footer-col">
                        <h3>Technologies</h3>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="mt-2 mb-2">
                            <span className="footer-text pr-1">React.js</span><i className="fab fa-react fa-2x"></i>
                        </a>
                        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">Node.js</span><i className="fab fa-node fa-2x"></i>
                        </a>
                        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">SASS</span><i className="fab fa-sass fa-2x"></i>
                        </a>
                        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"  className="mt-2">
                            <span className="footer-text pr-1">Bootstrap</span><img src={bootstrap} alt="Bootstrap logo" width="20" height="20"/>
                        </a>
                    </div>
                    <div className="col-md-4 footer-middle-col">
                        <h3>Resources</h3>
                        <a href="http://streetartnyc.org/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">streetartnyc</span><img src={streetartnyc} alt="Street Art NYC logo" width="50" height="50"/>
                        </a>
                        <a href="https://www.reddit.com/r/Graffiti/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">r/Graffiti</span><i className="fab fa-reddit fa-2x"></i>
                        </a>
                        <a href="https://www.feedspot.com/infiniterss.php?q=site:http%3A%2F%2Fwww.graffitistreet.com%2Ffeed" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">Graffiti Street</span><img src={graffitistreet} alt="Graffiti Street Logo" width="50" height="50"/>
                        </a>
                        <a href="http://home.ekosystem.org/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">ekosystem</span><img src={ekosystem} alt="Ekosystem Logo" width="70" height="50"/>
                        </a>
                    </div>
                    <div className="col-md-4 mt-4 footer-col">
                        <h3>Galleries</h3>
                        <a href="https://www.graffiti.org/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">Art Crimes</span><img src={artcrimes} alt="Graffiti.org logo" width="80" height="50"/>
                        </a>
                        <a href="https://streetpins.com/graffiti-gallery" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                            <span className="footer-text pr-1">Streetpins</span><img src={streetpins} alt="Streetpins logo" width="90" height="90"/>
                        </a>

                        <div className="footer-related-col pt-4">
                            <h4>Related</h4>
                            <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer"  className="mt-2 mb-2">
                                <span className="footer-text pr-2">Flickr</span><i className="fab fa-flickr fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-center footer-subrow mt-4 pb-3 pt-3">
                &copy; Anthony <b>Salemo</b> 2018
            </div>
        </div>
    )
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Footer;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //