const express = require('express');
const { register, getuser } = require('./controller');

const router = express.Router();

router.post('/register', register);
router.get('/getuser', getuser);


module.exports = router;