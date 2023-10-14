const express = require("express");
const router = express.Router();
const { registerController } = require('../controllers/authController');

//routing
//Register || METHOD POST
router.post('/register', registerController)

module.exports = router;