
const express = require('express');
const router = express.Router();
const {postcontact, postrewrite} = require('../controllers/index');
const {validateContactRequest, validateRewriteRequest} = require('../middleware/index');

router.post("/contact", validateContactRequest, postcontact);

router.post('/rewrite', validateRewriteRequest, postrewrite);

module.exports = router;