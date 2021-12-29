/**
 * alert
 * This directory will contain components related to passing information to the
 * user (for example notifications or ‘loading’ components).
 *
 * PageNotFound.js
 * This will show the default view for an unregistered URL.
 *
 * In addition to showing the message, a link is added to return the user back
 * to the dashboard.
 */


import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='wrap'>
            <h1>404 - Page Not Found</h1>
            <p>Could not find the page you were looking for.</p>
            <Link to={'/'}>Return to Dashboard</Link>
        </div>
    );
};

export default PageNotFound;
