const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/getuser', protect, getUser);
// router.get('/loggedIn', loginStatus);
router.get('/loggedin', loginStatus, async (req, res, next) => {
  try {
    // Your existing code here
    res.set('Access-Control-Allow-Origin', 'https://pinvent-app-frontend.vercel.app');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.json({ user: req.user });
  } catch (error) {
    next(error);
  }
});
router.patch('/updateuser', protect, updateUser);
router.patch('/changepassword', protect, changePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;
