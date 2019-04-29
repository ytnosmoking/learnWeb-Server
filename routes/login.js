const express = require('express')

const router = express.Router()



router.post('/', (req, res, next) => {
  const {
    username,
    password
  } = req.query

})