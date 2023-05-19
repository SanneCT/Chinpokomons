const router = require('express').Router();
const { requireAuth } = require('../middleware/requireAuth');

router.get('/home', requireAuth, (req, res) => {
    res.render('home');
});


router.get('/logout',(req, res) => {
    res.cookie('jwt','', {maxAge: 1});
    res.status(200).redirect('/')
});

router.get('/veileder',(req, res) => {
    res.render('veileder')
});


module.exports = router;