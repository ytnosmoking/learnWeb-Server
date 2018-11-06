const express = require('express')
const router = express.Router()


router.get('/detail', (req, res, next) => {
  res.send(req.query)
  // res.send('this is movie detail')
})

router.post('/goods/:id', (req, res, next) => {
  console.log(req.params)
  res.send(req.params)
})

module.exports = router