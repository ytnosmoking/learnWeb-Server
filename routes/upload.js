const express = require('express')
const router = express.Router()
const multiparty = require('connect-multiparty')
const multipartyMiddleware = multiparty()


router.post('/single', multipartyMiddleware, (req, res) => {
  console.log(req)
  // console.log(req.file);
  if (req.files) {
    res.json({
      code: 200,

      result: {
        id: req.body.id,
        files: req.files
      }
    })

  } else {
    res.json({
      code: 500
    })
  }
  // res.json(req.files)
})


module.exports = router