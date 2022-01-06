/**
 * Authentication.js :
 * This contains a helper function for handling successful authentication
 * operations.
 *
 * This callback is used when the API successfully authenticates a registered
 * user. It simply saves the data returned by the API (the authenticated user
 * details and the JWT).
 */

import {loadJWT, saveJWT, saveUser} from './LocalStorage';
import {useJwt} from 'react-jwt';

export const successfulAuthenticationCallback = (data) => {
    const {user, access_token} = data;
    saveUser(user);
    saveJWT(access_token);
};

export const isAuthenticated = () => {
    const { decodedToken, isExpired } = useJwt(loadJWT());

    return !isExpired && !!decodedToken;
}