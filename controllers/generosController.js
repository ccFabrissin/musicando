let db = require("../database/models");

const generosController = {
    list: (req,res) => {
        db.Generos.findAll({include: ["canciones"]})
            .then((generos)=>{
                return res.json({
                  status: 200,
                     data:generos
             })
        })
    }
}

module.exports = generosController;