/**
 * restricted/
 * This directory will contain components that are only available to
 * authenticated users.
 * Can only be accessed when the user has a valid JWT.
 *
 * client/
 * This directory will contain components relevant for managing clients.
 *
 * AddClient.js
 * This component wraps the BaseClientForm component. But since we are creating
 * a new client, we pass null to the component. By doing this the form is
 * rendered with empty initial values.
 */

 import React from 'react';
 import BaseClientForm from './BaseClientForm';

 const AddClientForm = () => <BaseClientForm client={null} />;
 export default AddClientForm;