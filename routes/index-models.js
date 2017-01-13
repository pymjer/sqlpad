var router = require('express').Router()
var mustBeAuthenticated = require('../middleware/must-be-authenticated.js')

router.get('/models', mustBeAuthenticated, function (req, res, next) {
  return res.json({
    title: 'success'
  })
})

module.exports = router
