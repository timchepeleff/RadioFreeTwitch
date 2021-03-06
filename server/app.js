const express = require('express');
const path = require('path');
const app = express();

app.use('*/client', express.static(path.join(__dirname, '/..', '/client')));
app.use('*/node_modules/bootstrap', express.static(path.join(__dirname, '/..', '/node_modules/bootstrap')));

require('./routes.js')(app);

const port = 8080;
app.listen(port);
console.log('Listening on port ' + port);
