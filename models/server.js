const express = require('express')
const cors = require('Cors')

class Server{

    constructor(){

        this.app = express()
        this.port= 8080
        this.usuariosPath='/api/usuarios'

        //middlewares()
        this.middleware();
        this.app.use(express.json())

        //rutas de la APP
        this.routes()

        //CORS


    }
    
    middleware(){
        //CORS
        this.app.use(cors())
        //Lectura y parseo
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath,require('../Routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log( "servidor conectado")
        })
    }
}

module.exports = Server