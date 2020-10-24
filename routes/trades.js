const express = require('express');
const router = express.Router();

const tradeController = require('../controllers/trades');

router.post('/', tradeController.createTrade);
router.delete('/', tradeController.updateTrade);
router.put('/', tradeController.updateTrade);
router.patch('/', tradeController.updateTrade);

module.exports = router;
