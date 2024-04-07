// npm install pg-promise
// use pg-promise (and invoke right away)
// this allows us to connect the server to a database

const pgp = require("pg-promise")();

require("dotenv").config();
// this require does not have to have a variable assigned to it because we are only using it right here, right now, this once


// we are making an object called connection that will allow us to take the values and pass them to pg-promise. The object below, called cn, is a parameter in the function pgPromise.

const cn = {
    port: process.env.PG_PORT,
    user: process.env.PG_USER, 
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE
}

const db = pgp(cn)

module.exports = db;