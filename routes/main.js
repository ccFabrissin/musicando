// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers ************
const mainController = require('../controllers/mainController');

// ************ Routes ************
router.get('/', mainController.index)

module.exports = router;