const express = require('express');
const router = express.Router();
const { login, forgotPassword } = require('../controller/userController')

router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;