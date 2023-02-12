// Configurar la base de datos db

require('dotenv').config()   // Importar para activar la variable de entorno "para acceder tenemos que agregar (process)"

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV, 
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'Bacano$$100',
            port: 5432,
            database: 'post-module',
            define: {
                timestamps: true, // Va a utilizar por defecto el created_at y update_at
                underscored: true, //Conviernte CamelCase en snake_case  todo los nombres y atrinutos
                underscoredAll: true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = configs