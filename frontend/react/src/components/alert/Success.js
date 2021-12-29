/**
 * alert
 * This directory will contain components related to passing information to the
 * user (for example notifications or ‘loading’ components).
 *
 * Success.js
 * This will show an alert to know that the user’s request was successfully
 * handled.
 *
 * In addition to displaying a success message, the setTimeout function is used
 * to close the success alert after 4 seconds.
 */

import React from 'react';
import {UncontrolledAlert} from 'reactstrap';

const SuccessAlert = ({
                        message,
                        onTimeout
                    }) => {

    setTimeout(onTimeout, 4000);

    return (
        <div style={{margin: '20px'}}>
            <UncontrolledAlert color='success'>
                {message}
            </UncontrolledAlert>
        </div>
    )
}

export default SuccessAlert;