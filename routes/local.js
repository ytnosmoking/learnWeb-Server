const express = require('express')
const router = express.Router()
const fs = require('fs')



const User = require('../model/index').User

router.post('/addGoods', (req, res, next) => {
  const dbArr = []
  for (let i = 0; i < 20; i++) {
    dbArr.push({
      name: i % 5 === 0 ? (i / 5) + '' : (i % 5) + '',
      sex: getRandom(2, 'floor') + '',
      star: getRandom(10),
      money: getRandom(50)
    })
  }
  User.insertMany(dbArr, (err, docs) => {
    if (err) throw err;
    res.send({
      status: 200,
      result: {
        msg: 'Ok'
      }
    })
  })
})

router.post('/getGoods', (req, res, next) => {
  User.find(req.body, (err, docs) => {
    if (err) throw err;
    docs.forEach(item => {
      if (!fs.existsSync(item.url)) { // 判断图片是否还存在 （地址存在 图片文件 不一定存在）
        item.url = ""
      }
    })
    res.send(docs)
  })
})

router.post('/delGood', (req, res, next) => {
  User.deleteOne(req.body, (err, result) => {

    if (err) throw err;
    if (req.body.url) {
      fs.unlinkSync(req.body.url) // 删除图像文件
    }

    res.send(result)
  })
})

router.post('/updateGood', (req, res, next) => {
  User.updateOne({
    "_id": req.body._id + ""
  }, {
    $set: req.body
  }, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

function getRandom(counts, style = "ceil") {
  return Math[style](Math.random() * counts)
}

module.exports = router