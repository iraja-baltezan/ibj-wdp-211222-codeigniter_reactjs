<?php
/**
 * Helper file to the generation and verification of tokens.
 * This allows to separate concerns in the application.
 */

use App\Models\UserModel;
use Config\Services;
use Firebase\JWT\JWT;

/**
 * Function to check the authorization header of the input request and return
 * the token value.
 * If the header is missing, it will throw an exception which, in turn, will
 * cause an HTTP_UNAUTHORIZED (401) response to be returned.
 */
function getJWTFromRequest($authenticationHeader):string
{
    // JWT is absent
    if (is_null($authenticationHeader))
        throw new Exception('Missing or invalid JWT in request');

    //  JWT is sent from client in format Bearer XXXXXXXX
    return explode(' ', $authenticationHeader)[1];
}


/**
 * Function that takes the token obtained by the getJWTFromRequest function.
 * It decodes this token to get the email that the key was generated for.
 * It then tries to find a user with that email address in the database.
 * If the user was not found, the User Model throws an exception which is
 * caught and returned to the user as an HTTP_UNAUTHORIZED (401) response.
 */
function validateJWTFromRequest(string $encodedToken)
{
    $key = Services::getJwtSecretKey();
    $decodedToken = JWT::decode($encodedToken, $key, ['HS256']);
    $userModel = new UserModel();
    $userModel->findUserByEmailAddress($decodedToken->email);
}

/**
 * Function used to generate a token for an authenticated user.
 * The encoded JWT contains the following details:
 *  - The email of the authenticated user. This is used in subsequent requests to
 *  - validate the source of the request.
 *  - The time when the token was generated (iat).
 *  - The time when the token expires (exp). This is gotten by adding the
 *      JWT_TIME_TO_LIVE value from our .env file to the current time.
 */
function getSignedJWTForUser(string $email)
{
    $issuedAtTime = time();
    $tokenTimeToLive = getenv('JWT_TIME_TO_LIVE');
    $tokenExpiration = $issuedAtTime + $tokenTimeToLive;
    $payload = [
        'email' => $email,
        'iat' => $issuedAtTime,
        'exp' => $tokenExpiration,
    ];

    $jwt = JWT::encode($payload, Services::getJwtSecretKey());

    return $jwt;
}
