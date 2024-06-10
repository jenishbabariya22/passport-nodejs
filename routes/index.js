const express = require('express');
const { index, dashboard, loginUser } = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport')

routes.get('/', index)
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.get('/dashboard', dashboard)


module.exports = routes