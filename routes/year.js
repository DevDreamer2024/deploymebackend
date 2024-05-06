var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/' , (req,res) => {
  res.json({ year : new Date().getFullYear() });
});

module.exports = router;
