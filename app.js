
const express = require('express')
let pokemons = require('./pok-list')
const morgan = require('morgan')

//add my favicon middleware
const favicon = require('serve-favicon')

//on ajoute notre module hlper
// const helper = require('./helper')
//c'est mieux d'utiliser l'affectation structurer 
const {success} = require('./helper')

const app = express()
const port = 3000


//utiliser un midlwares 
// const log = (req, res, next) => {
//     console.log(`url ${req.url}`)
//     next()
// }
// //utiliser le midlware pour send les log de url dans le terminal
// app
// .use(favicon(__dirname +'/favicon.ico'))
// .use(log)
/* on utilisera morgan pour moins de code*/
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))


app.get('/', (require, response) => {
    response.send('hello express word')
})

// app.get('/api/pokemons/1', (req, res) => { res.send('hello, Bulbizare !')})
//ici je vais essayer d'implementer le code pour aficher plusieurs root

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id) // j'ai ajouter parseInt parce que express par defaut envoie tous en string
    console.log(id)
    const pokemon = pokemons.find(pokemonn => pokemonn.id === id)
    // res.send(`Vous avez demander la root du pokemon ${id}`)
    // res.send(`Vous avez demander la root du pokemon ${pokemon.name}`)
    //je vais essayer d'envoyer du JSON
    const message = 'un pokemon a etait trouver'
    // res.json(pokemon) //ajouter une reponse en JSON
    // res.json(helper.success(message, pokemon))
    res.json(success(message, pokemon))
})

app.get('/api/pokemons', (req, res) => {
    // const result = pokemons.length
    // res.send(`Il y a ${result} pokemons`)
    const msg ='list complete de pokemons !'
    //const tab = []
    // for (i = 0; i < pokemons.length; i++)
    // {
    //     tab.push(pokemons[i])
    // }
    // res.json(success(msg, tab))
    //plus simple
    res.json(success(msg, pokemons))
})

app.listen(port, () => { console.log(`notre app Node est demarrée sur http://localhost:${port}`)})