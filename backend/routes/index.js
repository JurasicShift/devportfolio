
const express = require('express');
const router = express.Router();
const {postcontact, postrewrite} = require('../controllers/index');

router.post("/contact", postcontact);

router.post('/rewrite', postrewrite);

module.exports = router;