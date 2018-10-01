'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------------

var app = (0, _express2.default)(); // ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Base file for starting Express server
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------

var port = 3000;

app.get('/', function (request, response) {
  return response.send('Hello World');
});
app.listen(port, function () {
  return console.log('Express app listening on port: ' + port);
});