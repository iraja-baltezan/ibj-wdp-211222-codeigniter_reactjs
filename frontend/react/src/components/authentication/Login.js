/**
 * authentication
 * This directory will contain components related to the authentication process.
 *
 * Login.js
 *
 * The Login and Register components are quite similar, we start off by
 * declaring the initial values to be used in our form. All the values are empty
 * because we want a clean slate every time a user is registering or logging in.
 * We also declare a validation rule to be applied for each field in our forms.
 * If the form is successfully validated, then the provided details are passed
 * on to the API using submitCallback which is passed as a prop from the
 * Authentication component.
 *
 */

import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import CustomInput from '../form/CustomInput';
import {Button, FormGroup} from 'reactstrap';

const Login = ({submitCallback}) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .min(6, 'Email must be at least 6 characters')
            .max(250, 'Email cannot exceed 50 characters')
            .required('Email address is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Please select a password')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitCallback}>
            <Form>
                <FormGroup row>
                    <CustomInput
                        name={'email'}
                        label={'Email Address'}
                        type={'email'}
                    />
                </FormGroup>
                <FormGroup row>
                    <CustomInput
                        name={'password'}
                        label={'Password'}
                        type={'password'}
                    />
                </FormGroup>
                <Button
                    block
                    type='submit'
                    color={'danger'}>
                    Submit
                </Button>
            </Form>
        </Formik>
    );
};
export default Login;