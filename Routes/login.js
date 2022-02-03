const express = require('express');

const Router = express.Router();

const {login, register} = require('../Controllers/login')

//Registeration Route
Router.route('/register').get(register);

// Login Route 
Router.route('/login').get(login)


module.exports = Router


