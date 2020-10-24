const Trade = require('../models/trades');

createTrade = (req,res) => {
  const body = req.body;

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide data'
    })
  }

  const trade = new Trade(body);

  if(!trade) {
    return res.status(400).json({
    success: false,
    error: err
  })
} else {
  return res.status(201).json({
    body: trade
  })
}
}

module.exports =  {
  createTrade
}