const express = require('express')
const db = require('./utils/database')
const postRauter = require('./posts/posts.router')


// Initial configs
const app = express()

app.use(express.json()) 

// Mostrar en consola de manera informatica si la conexion se hizo de manera correra
db.authenticate() 
    .then ( () => {
        console.log("Las credenciales son correctas de la base de datos")
    })
    .catch( (err) => {
        console.log(err) //! Errores de autenticacion 
    })

//sincronizar base de datos con los modelos que estan definidos
db.sync()
    .then( () => {
        console.log('La bse de datos se sincronizo correctamente')
    })
    .catch( (err) => {
        console.log(err) // Errores al sincronizar las tablas, propiedades etc
    })

// Como nosotros podemos recibir info o data del cliente
    app.get('/', (req, res) => {
        res.json({
            message: 'Server Ok!',
            routes: {
                products: 'http://localhost:9000/api/v1/post'
            }
        })
    })

    app.use('/api/v1', postRauter)

    app.listen(9000, () => {
        console.log('Server started at port 9000')
    })

module.exports = app
