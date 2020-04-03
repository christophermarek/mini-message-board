var express = require('express');
var router = express.Router();

const messages = [ 
  { text: "Hi there!", user: "Amando", added: new Date() }, 
  { text: "Hello World!", user: "Charles", added: new Date() }
];

router.post('/new', function (req, res) {
  var name = req.body.AuthorsName
  var message = req.body.Message
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
