let db = require("../database/models");

const cancionesController = {
    list: (req,res) => {
        db.Canciones.findAll()
            .then((canciones)=>{
                return res.json({
                     status: 200,
                     data:canciones
                    })
            })
    },
    show: (req,res) => {
        db.Canciones.findByPk(req.params.id)
            .then((cancion)=>{
                return res.json({
                    status: 200,
                    data: cancion
                })
            })
    }
}
module.exports = cancionesController;