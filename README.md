# node-api-boilerplate
Node.js api using express framework and mysql database and provide modular architecture

# Pre-requisites

  Node v7.6+

# Installation

Clone the repository

    git clone https://github.com/vaishalgandhi/node-api-boilerplate.git

Switch to the repo folder

    cd node-api-boilerplate

Copy the env.emample file and make the required configuration changes in the .env file

    cp env.example .env

Run the npm installation script

    npm i or npm install

Run the database migrations

    npm run migrate

Run the database seeders

    npm run seed

## Now run the project by running:

    `npm start`

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| bcrypt						  | Library for hashing and salting user passwords.                         |
| body-parser                     | Node.js body parsing middleware.                                        |
| colors                          | Terminal string styling done right.                                     |
| cors                         	  | providing a Connect/Express middleware that can be used to enable CORS	|
| compression                     | Node.js compression middleware.                                         |
| dotenv                          | Loads environment variables from .env file.                             |
| express                         | Node.js web framework.                                                  |
| express-jwt                     | Middleware that validates JsonWebTokens and sets req.user.              |
| express-limiter                 | Rate limiting middleware for Express applications.                      |
| express-validator               | Easy form validation for Express.                                       |
| helmet                          | Secure Express apps by setting various HTTP headers. 					|
| jsonwebtoken                    | An implementation of JSON Web Tokens.                                   |
| lodash                          | JavaScript utility library delivering modularity, performance & extras. |
| method-override                 | Use HTTP verbs like PUT or DELETE where client doesn't support it. 		|
| module-alias                    | Create aliases of directories.                                          |
| moment                          | JavaScript date library.                                                |
| mysql2                          | MySQL client for Node.js.                                               |
| nodemailer                      | Node.js library for sending emails.                                     |
| pug (jade)                      | Template engine for Express.                                            |
| sequelize                       | HTTP request logger middleware for node.js.                             |
| sequelize-cli                   | The Sequelize Command Line Interface (CLI) 								|

## Issues

If you come across any issues please report them [here](https://github.com/vaishalgandhi/node-api-boilerplate/issues).

## Contributing
Feel free to create any pull requests for the project. For proposing any new changes or features you want to add to the project, you can send us an email at vaishal48@gmail.com.

## License

[MIT LICENSE](https://github.com/vaishalgandhi/node-api-boilerplate/blob/master/LICENSE)

