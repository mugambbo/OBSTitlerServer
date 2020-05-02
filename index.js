const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
const bodyParser  = require('body-parser');
const title  = require('./routes/title.route');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', title.create);
app.listen(port, () => console.log(`OBS server listening at http://localhost:${port}`));