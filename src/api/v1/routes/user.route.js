"use strict";
exports.__esModule = true;
var express = require("express");
var user_controller_1 = require("../controllers/user/user.controller");
var token_middleware_1 = require("../../../middleware/token.middleware");
var userRoute = express.Router();

var userControllerInstance = new user_controller_1.UserController();
userRoute.post('/user', token_middleware_1.authenticateToken, userControllerInstance.saveUserCallback);
userRoute.get('/user', userControllerInstance.getAll);
exports["default"] = userRoute;
