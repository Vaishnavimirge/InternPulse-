const express = require('express');
const router = express.Router();
const {
  showLoginPage,
  loginIntern,
  homepage,
  addIntern,
  showInternDashboard,
  getLeaderboard
} = require('../controllers/internController');

router.get('/login', showLoginPage);              
router.post('/login', loginIntern);         
router.post('/add', addIntern);              
router.get('/dashboard/:id', showInternDashboard); 
router.get('/leaderboard', getLeaderboard);  
router.get('/',homepage);



module.exports = router;
