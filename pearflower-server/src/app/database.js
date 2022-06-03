const mysql = require('mysql2')

const connections = mysql.createPool({
  // host: process.env.MYSQL_HOST,
  // // @ts-ignore
  // port: process.env.MYSQL_PORT,
  // database: process.env.MYSQL_DATABASE,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD
  host: 'localhost',
  port: 3306,
  database: 'pearflower',
  user: 'root',
  password: '123456'
})

connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("连接失败：", err);
    } else {
      console.log("数据库连接成功！");
    }
  })
})

module.exports = connections.promise();