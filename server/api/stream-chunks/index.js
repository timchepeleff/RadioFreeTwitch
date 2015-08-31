'use strict'

var controller = require('./stream-chunks.controller.js');

var express = require('express');
var router = express.Router();

router.get('/:stream', controller.get);

module.exports = router;