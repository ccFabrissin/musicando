// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers ************
const cancionesController = require('../controllers/cancionesController');


// ************ Routes ************
router.get('/', cancionesController.list)
router.get('/:id', cancionesController.show)


module.exports = router;