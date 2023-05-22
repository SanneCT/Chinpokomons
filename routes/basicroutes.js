const router = require('express').Router();

//Controllers for default routes
const { index, login, createuserform } = require('../controllers/defaultController');
const { loginUser, createuser } = require('../controllers/authenticationController');

router.get('/', index); //henter pokomons i defaultcontrollers fra index funksjonen

router.get('/login', login);

router.post('/login', loginUser);

router.get('/createuser', createuserform);

router.post('/createuser', createuser);



module.exports = router;