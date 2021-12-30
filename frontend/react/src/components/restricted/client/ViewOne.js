/**
 * restricted/
 * This directory will contain components that are only available to
 * authenticated users.
 * Can only be accessed when the user has a valid JWT.
 *
 * client/
 * This directory will contain components relevant for managing clients.
 *
 * ViewOne.js
 * This component provides a detailed display of a single client.
 *
 * In this component, the useParams hook provided by React Router is used to
 * determine the id of the client to be displayed. The id is then passed to the
 * findClient function declared in react/src/utility/LocalStorage.js. The
 * details of the retrieved client are then rendered accordingly.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { findClient } from '../../../utility/LocalStorage';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
} from 'reactstrap';
import { formatCurrency, formatDate } from '../../../utility/Formatter';

const ClientView = () => {
    const { id } = useParams();
    const client = findClient(id);

    return (
        <div className='centredDiv' style={{ marginTop: '50px' }}>
            <Card>
                <CardHeader>{client.name}</CardHeader>
                <CardBody>
                    <CardTitle>
                        Services retained at the price of{' '}
                        {formatCurrency(client.retainer_fee)}
                    </CardTitle>
                    <CardText>{client.email}</CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>
                    <small className='text-muted'>
                        Services retained on {formatDate(client.created_at)}
                    </small>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ClientView;