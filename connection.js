const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'luis',
    password: '@Lord 2pm',
    database: 'escola'
});

conn.connect((err) => {
    if(err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as ID: ' + conn.threadId);
});

module.exports = conn;
