const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require("node-fetch");


app.use(cors());


app.get(`/api/search`, (req, res) => {
    console.log(req.query.q)
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
        .then((res) => res.json())
        .then((data) => {
            res.send(data)
        })
});



app.listen(3001);