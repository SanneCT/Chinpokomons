const Pokomons = require('../models/pokomon');

const index = (req, res, next) => {
    Pokomons.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { pokomons: result });
        })
}

const login = (req, res, next) => {
    res.render('login');
}

const logout = (req, res, next) => {
    res.render('logout');
}

const createuserform = (req, res, next) => {
    res.render('createuser');
}

const veileder = (req, res, next) => {
    res.render('veileder');
}

module.exports = {
    index,
    login,
    logout,
    createuserform,
    veileder
}

