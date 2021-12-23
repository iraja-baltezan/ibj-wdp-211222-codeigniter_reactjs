<?php
use App\Models\UserModel;
use Config\Services;
use Firebase\JWT\JWT;

function getJWTFromRequest($authenticationHeader):string
{
    // JWT is absent
    if (is_null($authenticationHeader))
        throw new Exception('Missing or invalid JWT in request');

    //  JWT is sent from client in format Bearer XXXXXXXX
    return explode('', $authenticationHeader[1]);
}

function validateJWTFromRequest(string $encodedToken)
{
    $key = Services::getJwtSecretKey();
    $decodedToken = JWT::decode($encodedToken, $key, ['HS256']);
    $userModel = new UserModel();
    $userModel->findUserByEmailAddress($decodedToken->email);
}

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
