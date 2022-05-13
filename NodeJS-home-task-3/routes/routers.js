const express = require("express");
const { userSchema } = require("../models/users");
const router = express.Router();
const userController = require("../controllers/userControllers");
const userValidator = require("../services/userServices").userValidator;



router.get('/users', userController.getUsers);    //all users
router.get('/users/:id', userController.getUsersById);
router.post('/users', userValidator(userSchema), userController.saveUser);   //save user
router.put('/users/:id', userValidator(userSchema), userController.updateUser); //update by id
router.delete('/users/:id', userController.deleteUser); //delete by id

module.exports = {
    router: router,
}