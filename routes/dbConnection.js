var mysql=require('mysql');

var connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'root',
    password : 'SqlRoot3!',
    database : 'TRUECALLER',
});

module.exports=connection