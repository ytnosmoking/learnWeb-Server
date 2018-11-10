const express = require('express')
const router = express.Router()




const User = require('../model/index').User

router.post('/addGoods', (req, res, next) => {
  const dbArr = []
  for (let i = 0; i < 500; i++) {
    dbArr.push({
      name: i + '',
      sex: getRandom(2, 'floor') + '',
      star: getRandom(500),
      money: getRandom(3000)
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
  // res.send(req.query)
  // User.find({}, (err, docs) => {
  //   if (err) throw err;
  //   res.send(docs)
  // })
  // res.send('this is movie detail')
})

router.post('/getGoods', (req, res, next) => {
  console.log('post....inGetGoods')
  console.log(req.body)
  User.find(req.body, (err, docs) => {
    if (err) throw err;
    const doclist = []
    docs.forEach(item => {
      const itemlist = {
        name: item.name,
        sex: item.sex,
        star: item.star,
        money: item.money
      }
      doclist.push(itemlist)
    })
    console.log(doclist)
    res.send(docs)
  })
})

router.post('/delGood', (req, res, next) => {
  User.remove(req.body, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

router.post('/updateGood', (req, res, next) => {
  console.log('-------------------')
  console.log(req.body)
  User.updateOne({
    "_id": req.body._id
  }, {
    $set: req.body
  }, (err, result) => {
    if (err) throw err;
    console.log(result)
    console.log('-------------------')
    res.send(result)
  })
})


function getRandom(counts, style = "ceil") {
  return Math[style](Math.random() * counts)
}


module.exports = router