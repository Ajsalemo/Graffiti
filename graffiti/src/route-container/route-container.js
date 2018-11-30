// --------------------------------- Imports ----------------------------- //
// ---------------------------------------------------------------------- //

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

// --------------------------------- Components -------------------------- //
// ---------------------------------------------------------------------- //

import Navbar from '../components/navbar';
import Footer from '../components/footer';

// ---------------------------------------------------------------------- //
// --------------------------------- Pages ------------------------------ //

import Home from '../pages/home/home';

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

const RouteContainer = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route component={Home} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
};


// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

export default RouteContainer;

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //