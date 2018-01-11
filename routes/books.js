var express = require('express');
var router = express.Router();

/**
 * GET users listing.
 */
router.get('/', function(req, res, next) {
  console.log('server books get');
  res.send('respond with a resource');
});

/**
 * PUT books listing.
 */
router.put('/', function(req, res, next) {
  console.log('server books put');

});

/**
 * POST books listing.
 */
router.post('/', function(req, res, next) {
  console.log('server books post');

});

/**
 * DELETE books listing.
 */
router.delete('/', function(req, res, next) {
  console.log('server book delete');

});

module.exports = router;
