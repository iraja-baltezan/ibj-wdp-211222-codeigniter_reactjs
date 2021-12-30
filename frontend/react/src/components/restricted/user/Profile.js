/**
 * restricted/
 * This directory will contain components that are only available to
 * authenticated users.
 * Can only be accessed when the user has a valid JWT.
 *
 * user/
 * This directory will contain components relevant to the user.
 *
 * Profile.js
 * This component renders a simple view of the authenticated user showing the
 * user’s name, email address and date of creation (formatted with the
 * formatDate function we declared in react/src/utility/Formatter.js). Because
 * we didn’t store profile images for users on our database, placeholder images
 * are used for the profile picture.
 *
 */

import React from 'react';
import { loadUser } from '../../../utility/LocalStorage';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { formatDate } from '../../../utility/Formatter';

const UserProfile = () => {
    const user = loadUser();
    return (
        <Card>
            <CardImg top src="https://64.media.tumblr.com/905c27a24fb4811c1cdea178c0da9c21/tumblr_ozmol48tNE1vsss7oo1_250.jpg" />
            <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.email}</CardSubtitle>
                <CardText>
                    Account created on {formatDate(user.created_at)}
                </CardText>
            </CardBody>
        </Card>
    );
}
export default UserProfile;