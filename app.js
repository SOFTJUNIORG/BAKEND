var mongoose = require('mongoose')

require('dotenv').config()


mongoose.connect(process.env.MONGODB_CONNECT).then(()=>{
    console.log("Conectado");
})

