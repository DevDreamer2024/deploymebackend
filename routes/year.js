var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/' , (req,res) => {
  res.json({ date : new Date().getFullYear().toString() });
});

module.exports = router;
