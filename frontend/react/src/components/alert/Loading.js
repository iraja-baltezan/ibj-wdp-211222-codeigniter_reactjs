/**
 * alert
 * This directory will contain components related to passing information to the
 * user (for example notifications or ‘loading’ components).
 *
 * Loading.js
 * This will show a spinner to let the user know that the request is being
 * processed.
 */

import React from 'react';
import {Spinner} from 'reactstrap';

const LoadingAlert = () => {
    return (
        <div className='centredDiv'>
            <Spinner size='lg' type='grow' color='dark'/>
        </div>
    );
};

export default LoadingAlert;