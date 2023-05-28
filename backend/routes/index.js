
const express = require('express');
const router = express.Router();
const {postcontact} = require('../controllers/index');

router.post("/contact", postcontact);

module.exports = router;