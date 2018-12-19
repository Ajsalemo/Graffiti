// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

// Actions
import { returnUserSearch, preDefinedNavbarSearch } from '../../redux/actions';

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
        this.preDefinedSearch = this.preDefinedSearch.bind(this);
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
    // Search function that is drawn from a list of pre-defined queries
    // ------------------------------------------------------------------------------------------------------- //

    preDefinedSearch = e => {
        const { loading } = this.state;

        this.setState({
            loading: !loading
        })

        if(!e.target.attributes[1]) {
            this.setState({
                loading: loading
            })
            return;
        } else {
            this.props.preDefinedNavbarSearch(e)
                .then(() => {
                    this.setState({
                        loading: loading
                    })
                    window.scrollTo({
                        top: 1600,
                        behavior: 'smooth' 
                    });
                })
                .catch(err => {
                    this.setState({
                        loading: loading
                    })
                    return err;
                })
        }
    }

    // ------------------------------------------------------------------------------------------------------- //
    // Search function that takes in the user's input
    // ------------------------------------------------------------------------------------------------------- //
    loadMostRecent = () => {
        const { loading } = this.state;
        const { navbar } = this.props;

        this.setState({
            loading: !loading
        })

        if(!navbar.values) {
            this.setState({
                loading: loading
            })
            return;
        } else {
            this.props.returnUserSearch(navbar.values.search)
                .then(() => {
                    this.setState({
                        loading: loading
                    })
                    window.scrollTo({
                        top: 1600,
                        behavior: 'smooth'
                    });
                })
                .catch(err => {
                    this.setState({
                        loading: loading
                    })
                    return err;
                })
        }
    }
    // ------------------------------------------------------------------------------------------------------- //
    // ------------------------------------------------------------------------------------------------------- //


    render() {
        const { handleSubmit } = this.props;
        const { loading } = this.state;

        return (
            <nav className="navbar navbar-light bg-dark fixed-top">
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
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={e => this.preDefinedSearch(e)}>
                                        <div className="dropdown-directory pt-3 pb-3">
                                            <a className="dropdown-item" data-item="tags" href="!#">Tags</a>
                                            <a className="dropdown-item" data-item="throw-ups" href="!#">Throw-ups</a>
                                            <a className="dropdown-item" data-item="stencils" href="!#">Stencils</a>
                                            <a className="dropdown-item" data-item="pieces" href="!#">Pieces</a>
                                        </div>
                                        <div className="dropdown-directory pt-3 pb-3">
                                            <a className="dropdown-item" data-item="new york" href="!#">New York</a>
                                            <a className="dropdown-item" data-item="london" href="!#">London</a>
                                            <a className="dropdown-item" data-item="paris" href="!#">Paris</a>
                                            <a className="dropdown-item" data-item="tokyo" href="!#">Tokyo</a>
                                            <a className="dropdown-item" data-item="seoul" href="!#">Seoul</a>
                                            <a className="dropdown-item" data-item="sydney" href="!#">Sydney</a>
                                            <a className="dropdown-item" data-item="sao paulo" href="!#">Sao Paulo</a>
                                            <a className="dropdown-item" data-item="mexico city" href="!#">Mexico City</a>
                                            <a className="dropdown-item" data-item="vancouver" href="!#">Vancouver </a>
                                            <a className="dropdown-item" data-item="newark" href="!#">Newark</a>
                                            <a className="dropdown-item" data-item="rome" href="!#">Rome</a>
                                            <a className="dropdown-item" data-item="berlin" href="!#">Berlin</a>
                                        </div>
                                        <div className="dropdown-directory">
                                            <a target="_blank" rel="noopener noreferrer" className="dropdown-item" href="https://github.com/Ajsalemo/Graffiti">Github</a>
                                            <a target="_blank" rel="noopener noreferrer" className="dropdown-item pb-3" href="https://www.graffiti.org/">Inspiration</a>
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
    { returnUserSearch, preDefinedNavbarSearch }
)(Navbar);

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default Navbar;

// ---------------------------------------------------------------------- //