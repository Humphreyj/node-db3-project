const express = require('express');
const router = express.Router();

const schemesRoute = require('../routes/schemesRoute');

router.use('/schemes', schemesRoute);

module.exports = router;