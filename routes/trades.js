const express = require('express');
const router = express.Router();

const tradeCtrlr = require('../controllers/trades');

router.delete('/:id', tradeCtrlr.noOpTrade)

router.put('/:id', tradeCtrlr.noOpTrade)

router.patch('/:id', tradeCtrlr.noOpTrade)

router.post('/', tradeCtrlr.createTrader);

router.get('/:id', tradeCtrlr.getTradeById)

router.get('/', tradeCtrlr.fetchAllTrades)

module.exports = router;
