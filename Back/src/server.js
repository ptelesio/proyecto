require('dotenv').config();
const app = require('./app');
app.listen(process.env.PORT, function () { 
  console.log(`Server started in port : ${process.env.PORT}`);
});