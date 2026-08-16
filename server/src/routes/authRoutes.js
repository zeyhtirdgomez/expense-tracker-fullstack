const express = require('express');
const router = express.Router();

const {registerUser, loginUser} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, (req, res) => {
    res.status(200).json({message : 'Authenticated successully', user : req.user});
});

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;