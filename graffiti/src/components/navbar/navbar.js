// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';
import { Link } from 'react-router-dom';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark fixed-top">
            <Link to="/" className="navbar-brand"><i className="fas fa-home"></i></Link>
            <form className="form-inline nav-form">
                <div className="input-group nav-form-input">
                    {/* --------------- Prepended icon ----------------------------*/}
                    <div className="input-group-prepend">
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    {/* --------------------------------------------------------- */}

                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />

                    {/* --------------- Appended icon/Dropdown ----------------------------*/}
                    <div className="input-group-append">
                        <div className="input-group-text dropdown">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-directory pt-3 pb-3">
                                    <a className="dropdown-item" href="!#">Tags</a>
                                    <a className="dropdown-item" href="!#">Throw-up</a>
                                    <a className="dropdown-item" href="!#">Stencil</a>
                                    <a className="dropdown-item" href="!#">Pieces</a>
                                </div>
                                <div className="dropdown-directory pt-3 pb-3">
                                    <a className="dropdown-item" href="!#">New York</a>
                                    <a className="dropdown-item" href="!#">London</a>
                                    <a className="dropdown-item" href="!#">Paris</a>
                                    <a className="dropdown-item" href="!#">Tokyo</a>
                                    <a className="dropdown-item" href="!#">Seoul</a>
                                    <a className="dropdown-item" href="!#">Sydney</a>
                                    <a className="dropdown-item" href="!#">Sao Paulo</a>
                                    <a className="dropdown-item" href="!#">Mexico City</a>
                                    <a className="dropdown-item" href="!#">Vancouver </a>
                                    <a className="dropdown-item" href="!#">Newark</a>
                                    <a className="dropdown-item" href="!#">Rome</a>
                                    <a className="dropdown-item" href="!#">Berlin</a>
                                </div>
                                <div className="dropdown-directory">
                                    <a className="dropdown-item" href="!#">Github</a>
                                    <a className="dropdown-item pb-3" href="!#">Inspiration</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                    {/* --------------------------------------------------------- */}
                </div>
            </form>
        </nav>
    )
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Navbar;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //