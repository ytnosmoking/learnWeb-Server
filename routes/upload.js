const express = require('express')
const router = express.Router()
const multiparty = require('connect-multiparty')
const multipartyMiddleware = multiparty()
const fs = require('fs')


router.post('/single', multipartyMiddleware, (req, res) => {
  // console.log(req)
  // console.log(req.file);
  if (req.files) {

    const srcUrl = req.files.file.path.split("/")
    srcUrl[1] = req.body.id + req.files.file.originalFilename
    // console.log(srcUrl)
    if (req.files.file.type === "image/png") {
      srcUrl.splice(1, 0, 'images')
    } // 图片存储地址
    let desUrl = srcUrl.join("/")
    const source = fs.createReadStream(req.files.file.path)
    const dest = fs.createWriteStream(desUrl)
    source.pipe(dest)
    source.on('end', () => {
      fs.unlinkSync(req.files.file.path)
      res.json({
        code: 200,
        result: {
          id: req.body.id,
          files: desUrl
        }
      })
    })
  } else {
    res.json({
      code: 500
    })
  }
})


module.exports = router