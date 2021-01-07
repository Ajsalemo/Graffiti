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
                                            <button className="dropdown-item" data-item="tags">Tags</button>
                                            <button className="dropdown-item" data-item="throw-ups">Throw-ups</button>
                                            <button className="dropdown-item" data-item="stencils">Stencils</button>
                                            <button className="dropdown-item" data-item="pieces">Pieces</button>
                                        </div>
                                        <div className="dropdown-directory pt-3 pb-3">
                                            <button  className="dropdown-item" data-item="new york">New York</button>
                                            <button  className="dropdown-item" data-item="london">London</button>
                                            <button  className="dropdown-item" data-item="paris">Paris</button>
                                            <button  className="dropdown-item" data-item="tokyo">Tokyo</button>
                                            <button  className="dropdown-item" data-item="seoul">Seoul</button>
                                            <button  className="dropdown-item" data-item="sydney">Sydney</button>
                                            <button  className="dropdown-item" data-item="sao paulo">Sao Paulo</button>
                                            <button  className="dropdown-item" data-item="mexico city">Mexico City</button>
                                            <button  className="dropdown-item" data-item="vancouver">Vancouver </button>
                                            <button  className="dropdown-item" data-item="newark">Newark</button>
                                            <button  className="dropdown-item" data-item="rome">Rome</button>
                                            <button  className="dropdown-item" data-item="berlin">Berlin</button>
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