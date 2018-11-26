// --------------------------------- Imports ----------------------------- //
import React from 'react';
// ---------------------------------------------------------------------- //

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark fixed-top">
            <a href="!#" className="navbar-brand"><i className="fas fa-home"></i></a>
            <form className="form-inline nav-form">
                <div className="input-group nav-form-input">
                    <div className="input-group-prepend">
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </div>
            </form>
        </nav>
    )
};

// ---------------------------------------------------------------------- //
export default Navbar;
// ---------------------------------------------------------------------- //