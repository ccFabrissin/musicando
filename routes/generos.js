// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers ************
const generosController = require('../controllers/generosController');

// ************ Routes ************
router.get('/', generosController.list)

module.exports = router;