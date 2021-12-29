/**
 * alert
 * This directory will contain components related to passing information to the
 * user (for example notifications or ‘loading’ components).
 *
 * Failure.js
 * This will show an alert with a provided error message.
 *
 * Our API returns error messages as an object with (possibly) multiple error
 * messages. Hence this component takes the object as a prop and displays them
 * as a list of errors.
 */

import React from 'react';
import {UncontrolledAlert} from 'reactstrap';

const FailureAlert = ({errors}) => {
    return (
        <UncontrolledAlert color='danger'>
            <h4 className='alert-heading'>Request Failed</h4>
            <hr/>
            <ul className='plainList'>
                {Object.values(errors).map((error, index) => {
                    return <li key={index}>{error}</li>
                })}
            </ul>
        </UncontrolledAlert>
    )
}

export default FailureAlert;