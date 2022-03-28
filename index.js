// run `node index.js` in the terminal
var express = require('express');
const app = express();
app.get('/user', function (req, res) {
  res.send({ userName: 'huangbo', password: '123456' });
});
app.listen(80, function () {
  console.log('服务启动成功了;');
});
