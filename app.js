
const express = require('express')

const app = express()
const port = 3000

app.get('/', (require, response) => {
    response.send('hello express word')
})

app.get('/api/pokemons/1', (req, res) => { res.send('hello, Bulbizare !')})

app.listen(port, () => { console.log('notre app Node est demarrée sur http://localhost:${port}')})