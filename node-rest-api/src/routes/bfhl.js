const express = require('express');
const router = express.Router();
const { processArray } = require('../controllers/bfhlController');

router.post('/', processArray); // Changed from '/bfhl' to '/'

module.exports = router;