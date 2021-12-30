/**
 * restricted/
 * This directory will contain components that are only available to
 * authenticated users.
 * Can only be accessed when the user has a valid JWT.
 *
 * client/
 * This directory will contain components relevant for managing clients.
 *
 * EditClient.js
 * This component uses the useParams hook to get the requested id and passes the
 * appropriate client to the BaseClientForm
 */

import React from 'react';
import BaseClientForm from './BaseClientForm';
import { useParams } from 'react-router-dom';
import { findClient } from '../../../../utility/LocalStorage';

const EditClientForm = () => {
    const { id } = useParams();

    return <BaseClientForm client={findClient(id)} />;
};

export default EditClientForm;