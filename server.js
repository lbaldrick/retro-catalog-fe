const express = require('express');
const app = express();
const fs = require('fs');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.get('/retro/games/:platform', (req, res) => {
    fs.readFile(__dirname + '/server/api/mocks/gaming/' +  req.params.platform + '/any.get.json', 'utf8',
        (err, data) => {
            const response = JSON.parse(data);
            res.status(200).send(response);
        }
    );
});




app.listen(3003, () => console.log('Example app listening on port 3003!'));
