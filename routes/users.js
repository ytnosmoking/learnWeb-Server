var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/123', function (req, res, next) {
  res.send('123')
})
router.get('/err', (req, res, next) => {
  res.render('error', {
    error: {
      status: '123',
      stack: 'stack'
    }
  });
})

module.exports = router;