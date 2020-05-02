const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
const bodyParser  = require('body-parser');
const fs = require('fs');
const homedir = require('os').homedir();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    const body = req.body;
    fs.writeFile(`${homedir}/current_title.txt`, body.title, 'utf8', (err) => {
        if (err) res.status(err.code).json(err.message);
        console.log(`${homedir}/current_title.txt`);
        console.log("Body title save: "+JSON.stringify(body));
        res.json({status: 200});
    });
})

app.listen(port, () => console.log(`OBS server listening at http://localhost:${port}`));