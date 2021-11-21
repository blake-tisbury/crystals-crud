const mysql = require('mysql')

const dotenv = require('dotenv').config({ path: 'private/keys.env' });

/**
 * 
 * @param {string} key 
 * //Function to get value from env
 */
function getEnv(key) {
    return (process.env[key]);
}

const config = {
    host: getEnv("DB_HOST"),
    user: getEnv("DB_USER"),
    password: getEnv("DB_PASS"),
    database: getEnv("DB_DB"),

}


const db = mysql.createConnection(config, function (err) {
    if (err) console.log(err);
})

module.exports = db;