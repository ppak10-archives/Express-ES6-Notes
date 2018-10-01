// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Base file for starting Express server
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import express from 'express';
// ----------------------------------------------------------------------------

const app = express()
const port = 3000

app.get('/', (request, response) => response.send('Hello World'))
app.listen(port, () => console.log('Express app listening on port: ' + port))
