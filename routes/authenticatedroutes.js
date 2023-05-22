const router = require('express').Router();
const { requireAuth, ifHome } = require('../middleware/requireAuth');
const { getOwn } = require('../controllers/authenticationController');

router.get('/home/:username', requireAuth, ifHome, getOwn,  (req, res) => {
    res.render('home');
});

router.get('/logout',(req, res) => {
    res.cookie('jwt','', {maxAge: 1});
    res.status(200).redirect('/')
});

router.get('/veileder', requireAuth, (req, res) => {
    res.render('veileder')
});


module.exports = router;