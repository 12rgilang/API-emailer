const express = require('express')
const Router = express.Router()

const {emailController} = require('./../controllers')

Router.post('/', emailController.email)

module.exports = Router