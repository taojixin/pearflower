const app = require('./app')
require('dotenv').config()
require('./app/database')



app.listen(8887, ()=> {
  console.log(`服务器在${process.env.APP_PORT}端口启动成功！`);
})