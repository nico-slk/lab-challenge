const app = require('express').Router()

app.get('http://localhost:3000/api/search:query', (req, res) => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:query`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        })
})


app.use('listener')