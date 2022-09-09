const express = require('express')
let list = require('./list_pok')
const helper = require('./helper')
const morgan = require('morgan')

const app = express()
const port = 8080

//middleware
const logger = (req, res, next) => {
    console.log(`URL ${req.url}`)
    next();
}

app.use(logger)
app.use(morgan('dev'))

//get c'est la methode de la requete , '/' chemin  de requette
app.get('/', (req,res) => {
    res.send('Bravo vou etes sur root :):)')
})

app.get('/api/pokemons/:id/:name', (req, res) => {
    const id = req.params.id
    const name = req.params.name
    res.send(`Vous etes sur la page ${id} du pokemon ${name}`)
   
})

app.get('/api/pokemons/:id', (req, res) => {
    const idd = parseInt(req.params.id)
    const pok = list.find(pokem => pokem.id === idd)
    // res.send(`vous etes sur la page de ${pok.name}`)
    // res.json(pok)
    res.json(helper.success('hi', pok))
})

app.get('/api/pokemons', (req, res) => {
    const size = list.length
        res.json(list)
//     res.send(`nombre de pokemon est ${size}`)
 })

 //utiliser la methode POST
app.post('/api/pokemons', (req, res) => {
    const ident = 123
    const creatpok = {...req.body, ...{id: id, created: new Date()}}
    res.json(helper(`le pokemon ${creatpok.name} est bien crée`, creatpok))
})


// app.listen(8080)
app.listen(port, () => console.log(`Connected in http://localhost:${port}`))

/*

+-------------+------------+-----------+----------+--------------+-------------+
| Employee_id | First_name | Last_name |  Salary  | Joining_date | Departement |
+-------------+------------+-----------+----------+--------------+-------------+
|     1       |     Bob    |   Kinto   | 1000000  |  2019-01-20  |   Finance   |
|     2       |    Jerry   |  Kansxo   | 6000000  |  2019-01-15  |     IT      |
|     3       |    Philip  |   Jose    | 8900000  |  2019-02-05  |   Banking   |
|     4       |    John    |  Abraham  | 2000000  |  2019-02-25  |  Insurance  |
|     5       |   Michael  |  Mathew   | 2200000  |  2019-02-28  |   Finance   |
|     6       |    Alex    |  chreketo | 4000000  |  2019-05-10  |     IT      |
|     7       |    Yohan   |   Soso    | 1230000  |  2019-06-20  |   Banking   |
+-------------+------------+-----------+----------+--------------+-------------+


+-----------------+-------------+--------+
| Employee_ref_id | date_reward | amount |
+-----------------+-------------+--------+
|         1       | 2019-05-11  |  1000  | 
|         2       | 2019-02-15  |  5000  |
|         3       | 2019-04-22  |  2000  |
|         1       | 2019-06-20  |  8000  |
+-----------------+-------------+--------+
*/