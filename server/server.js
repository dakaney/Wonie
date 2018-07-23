const path = require('path');
const express = require('express');

const app = express()

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(1337, () => console.log('Example app listening on port 1337!'))