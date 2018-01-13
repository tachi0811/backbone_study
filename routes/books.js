var express = require('express');
var router = express.Router();

/**
 * DB化するのは面倒臭いので、ここでデータを戻す
 */
var books = [
  {id: 1, name: 'Book1'},
  {id: 2, name: 'Book2'},
  {id: 3, name: 'Book3'},
  {id: 4, name: 'Book4'},
  {id: 5, name: 'Book5'},
  {id: 6, name: 'Book6'},
];

/**
 * GET users listing.
 */
router.get('/:id', function(req, res, next) {
  console.log('server books get');
  var book = books.filter((x, y, z) => x.id == req.params.id);
  if (book.length == 1) {
    res.json(book[0]);
  } else {
    res.json(null);
  }
});

/**
 * GET users listing.
 */
router.get('/', function(req, res, next) {
  console.log('server books get');
  res.json(books);
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
