# ibj-wdp-211222-codeigniter_reactjs

CodeIgniter 4 RESTful API and React JS on shared host.

This is a basic code experiment on how to:

- use CodeIgniter 4 with shared hosting;
- provide an RESTful API with JWT authentication;
- and a React front end to consume that API.

## Credits

Inspired by [OLUYEMI OLUSUSI](https://github.com/yemiwebby)'s tutorials:

- [Create a Secured RESTful API with CodeIgniter and JSON Web Tokens](https://www.twilio.com/blog/create-secured-restful-api-codeigniter-php)
    - https://www.twilio.com/blog/create-secured-restful-api-codeigniter-php
    - https://github.com/yemiwebby/ci-secure-api

- [Build a Single Page Application in PHP with CodeIgniter and React](https://www.twilio.com/blog/build-single-page-application-php-codeigniter-react)
    - https://www.twilio.com/blog/build-single-page-application-php-codeigniter-react

## Warning

The __"doc"__ folder contains a copy of the CodeIgniter and Devilbox ".env" files, where the PHP and MySQL versions used in the project can be consulted.

- The __"devilbox.env"__ is the __.env__ file in the root of Devilbox's git directory.
- The __"codeigniter.env"__ is the __.env__ file in the CodeIgniter's __"backend"__ directory.

The __.env__ files were included in the Git commits for educational purposes.

It is advisable to add the ".env" files to the ".gitignore" of the project.
Obviously .env files should not be committed if they contain information that compromises the safety of the project.
> Some info: _Please don't commit .env (https://dev.to/somedood/please-dont-commit-env-3o9h)_.


## Notes

- The code has been changed to be compatible with react-router-dom v6.
- The "backend" folder contains the CodeIgniter files.
- The files from CodeIgniter's "public" folder have been moved to the root of the application, outside of the "backend" folder.
- The "frontend" folder contains the React files.
- The "public" folder at the root is a suggestion of where the front-end assets might reside.
- ".htaccess" files apply some access restrictions to the contents of the "frontend" and "backend" folders.