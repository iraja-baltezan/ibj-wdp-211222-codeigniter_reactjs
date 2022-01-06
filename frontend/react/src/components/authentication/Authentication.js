/**
 * authentication
 * This directory will contain components related to the authentication process.
 *
 * Authentication.js
 * The Authentication component is used to coordinate the activities of the
 * Login and Register components. Because the isLogin state variable, the user
 * can toggle between the registration and login form.
 *
 * When the user successfully completes either the login or registration form,
 * submitCallback is called to make a request to our API (using the makeRequest
 * function declared in react/src/utility/Api.js. If the response is an error
 * response, then the FailureAlert component is rendered to show the user what
 * went wrong. If the request was successfully handled, the user details and
 * token are saved using the successfulAuthenticationCallback component declared
 * in react/src/utility/Authentication.js.
 */

import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
import {Button} from 'reactstrap';
import FailureAlert from '../alert/Failure';
import {makeRequest} from '../../utility/Api';
import {successfulAuthenticationCallback} from '../../utility/Authentication';

const Authentication = ({setIsAuthenticated}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [errors, setErrors] = useState(null);

    const submitCallback = (values) => {
        makeRequest({
            url: `auth/${isLogin ? 'login' : 'register'}`,
            values,
            successCallback: (data) => {
                successfulAuthenticationCallback(data);
                setIsAuthenticated();
            },
            failureCallback: (errorResponse) => {
                setErrors(errorResponse)
            }
        });
    };

    return (
        <div className='centredDiv' style={{width: '60%'}}>
            {errors && <FailureAlert errors={errors}/>}
            {isLogin ?
                <Login submitCallback={submitCallback}/> :
                <Register submitCallback={submitCallback}/>
            }
            <Button
                style={{marginTop: '10px'}}
                block
                outline
                color={'primary'}
                onClick={() => {
                    setIsLogin(!isLogin)
                }}
            >
                {isLogin ? 'Register' : 'Login'}
            </Button>
        </div>
    );
};

export default Authentication;