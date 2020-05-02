const homedir = require('os').homedir();
const fs = require('fs');

function create(req, res){
    const body = req.body;
    fs.writeFile(`${homedir}/current_title.txt`, body.title, 'utf8', (err) => {
        if (err) res.status(err.code).json(err.message);
        console.log(`${homedir}/current_title.txt`);
        console.log("Body title save: "+JSON.stringify(body));
        res.json({status: 200});
    });
}

module.exports = {
    create
};