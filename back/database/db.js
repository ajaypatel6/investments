// where to connect to pg 
const Pool = require("pg").Pool;
const dotenv = require("dotenv"); // env for passwords

dotenv.config({path: "./env"})


// USE .env 
// not sure if working

const pool = new Pool({
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.PORT,
    DB: process.env.DATABASE,
});

module.exports = pool;