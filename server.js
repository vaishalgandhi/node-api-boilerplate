const express        = require('express');
const bodyParser     = require('body-parser');
const db 			 = require('./db-connect');
const app            = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app);

const port = 8000;

app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});