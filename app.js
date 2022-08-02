
const express = require('express')
let pokemons = require('./pok-list')

const app = express()
const port = 3000

app.get('/', (require, response) => {
    response.send('hello express word')
})

// app.get('/api/pokemons/1', (req, res) => { res.send('hello, Bulbizare !')})
//ici je vais essayer d'implementer le code pour aficher plusieurs root

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    const pokemon = pokemons.find(pokemonn => pokemonn.id === id)
    // res.send(`Vous avez demander la root du pokemon ${id}`)
    res.send(`Vous avez demander la root du pokemon ${pokemon.name}`)
})

app.listen(port, () => { console.log(`notre app Node est demarrée sur http://localhost:${port}`)})