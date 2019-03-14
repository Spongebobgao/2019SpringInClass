const mysql = require('mysql');
              require('dotenv').load();

const conn = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    passord: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
    //insecureAuth: true
})
conn.query("SELECT * FROM 2019spring_persons", (err, data) => {
    if (err) throw err
    else console.log(data)
});
module.exports = conn;