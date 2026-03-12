const express = require('express');
const router = express.Router();
const { login, forgotPassword ,changePassword, signup} = require('../controller/userController')
const auth = require('../services/authendication')
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.post('/changePassword', auth.authendicateToken, changePassword);
router.post('/signup', auth.authendicateToken, signup);

module.exports = router;