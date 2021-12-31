/**
 * restricted/
 * This directory will contain components that are only available to
 * authenticated users.
 * Can only be accessed when the user has a valid JWT.
 *
 * dashboard/
 * This directory will contain components relevant for the rendering of the
 * dashboard.
 *
 * Index.js
 * This is the component loaded immediately the user is successfully
 * authenticated.
 */

import React from 'react';
import DashboardMenu from './Menu';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../../routing/Routes';

const Dashboard = ({logout}) => {

    return (
        <Router>
            <>
                <DashboardMenu logout={logout}/>
                <Routes/>
            </>
        </Router>
    )
};

export default Dashboard;