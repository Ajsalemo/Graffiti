// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";

// Actions
import { returnMostRecent } from '../../redux/actions';

// Components
import LoadingIcon from '../loading-icon';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
        this.loadMostRecent = this.loadMostRecent.bind(this);
        this.navbarInput = this.navbarInput.bind(this);
    }

    // ------------------------------------------------------------------------------------------------------- //
    // Redux form input component 
    // ------------------------------------------------------------------------------------------------------- //

    navbarInput = ({input, meta: { touched, error }}) => {
        return (
            <input
                className="form-control" 
                type="text" 
                placeholder="Enter a city" 
                aria-label="Search" 
                {...input}
           />
        )
    };  

    // ------------------------------------------------------------------------------------------------------- //
    // Search function that can either take in the users input or load the pre-defined value in the search bar 
    // ------------------------------------------------------------------------------------------------------- //
    loadMostRecent = () => {
        const { loading } = this.state;
        const { navbar } = this.props;

        this.setState({
            loading: !loading
        })

        this.props.returnMostRecent(navbar.values.search)
            .then(() => {
                this.setState({
                    loading: loading
                })
                window.scrollTo({
                    top: 1600,
                    behavior: 'smooth'
                });
            })
    }
    // ------------------------------------------------------------------------------------------------------- //
    // ------------------------------------------------------------------------------------------------------- //


    render() {
        const { handleSubmit } = this.props;
        const { loading } = this.state;

        return (
            <nav className="navbar navbar-light bg-dark fixed-top">
                <Link to="/" className="navbar-brand"><i className="fas fa-home"></i></Link>

                { 
                    loading
                        ?
                    <LoadingIcon 
                        type={'spin'}
                        color={'#fff'}
                    />
                        :
                    <form className="form-inline nav-form" onSubmit={handleSubmit(this.loadMostRecent)}>
                        <div className="input-group nav-form-input">
                            {/* --------------- Prepended icon ----------------------------*/}
                            <div className="input-group-prepend">
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                            {/* --------------------------------------------------------- */}
    
                            <Field 
                                name="search" 
                                component={this.navbarInput} 
                            />
        
                            {/* --------------- Appended icon/Dropdown ----------------------------*/}
                            <div className="input-group-append">
                                <div className="input-group-text dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-directory pt-3 pb-3">
                                            <a className="dropdown-item" href="!#">Tags</a>
                                            <a className="dropdown-item" href="!#">Throw-ups</a>
                                            <a className="dropdown-item" href="!#">Stencils</a>
                                            <a className="dropdown-item" href="!#">Pieces</a>
                                        </div>
                                        <div className="dropdown-directory pt-3 pb-3">
                                            <a className="dropdown-item" href="!#" onClick={this.loadMostRecent}>New York</a>
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
                                            <a target="_blank" rel="noopener noreferrer" className="dropdown-item" href="https://github.com/Ajsalemo/Graffiti">Github</a>
                                            <a className="dropdown-item pb-3" href="!#">Inspiration</a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                            {/* --------------------------------------------------------- */}
                        </div>
                    </form>
                }

            </nav>
        )
    }
};

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

const mapStateToProps = state => {
    return {
        navbar: state.form.navbar
    }
}

// ---------------------------------------------------------------------- //
// ---------------------------- Redux-form decorator--------------------- //
Navbar = reduxForm({
    form: "navbar",
    destroyOnUnmount: false
})(Navbar)

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

Navbar = connect(
    mapStateToProps,
    { returnMostRecent }
)(Navbar);

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Navbar;

// ---------------------------------------------------------------------- //