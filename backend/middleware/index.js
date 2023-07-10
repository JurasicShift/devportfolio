const { body, validationResult } = require('express-validator');

const validateContactRequest = [
    
  body('subject').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('text').trim().notEmpty().escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateRewriteRequest = [
    
    body('searchTerm').trim().notEmpty().escape(),
    body('text').trim().notEmpty().escape(),
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

module.exports = {
    validateContactRequest,
    validateRewriteRequest
}