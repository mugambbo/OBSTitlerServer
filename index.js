const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
const bodyParser  = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    const body = req.body;
    fs.writeFile('current_title.txt', body.title, 'utf8', () => {
        console.log("Body title saved: "+JSON.stringify(body));
        res.json({status: 200});
    });
})

app.listen(port, () => console.log(`OBS titler server listening at http://localhost:${port}`));