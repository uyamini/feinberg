// utils/databaseQuery.js
const connection = require('./databaseConnection');

function fetchDataFromDatabase(callback) {
    const sqlQuery = 'SELECT * FROM employees';

    connection.query(sqlQuery, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    fetchDataFromDatabase
};

