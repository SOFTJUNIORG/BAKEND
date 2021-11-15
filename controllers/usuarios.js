const {response , request} = require('express')


const usuariosGet = ( req, res )=>{
   // const usuario = req.body
    res.json({
        msj:'Get'
    })
}

const usuariosPut = (req, res )=>{
   // const usuario = req.body
    res.json({
        msj:'Put'
    })
}
const usuariosPost = (req, res )=>{
   // const usuario = req.query
    res.json({
        msj:'Post'
    })
}
const usuariosDelete = (req, res)=>{
    //const usuario = req.query
    res.json({
        msj:'Delete'
    })
}



module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}