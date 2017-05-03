var mysql=require('mysql');

var connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'root',
    password : 'SqlRoot3!',
    database : 'TRUCALLER',
});

module.exports=connection