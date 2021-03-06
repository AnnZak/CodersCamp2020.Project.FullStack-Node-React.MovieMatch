const UserController = require("./UserController");

// POST:
module.exports.login = (req, res) => { new UserController(req, res).login() };
module.exports.register =  (req, res) => { new UserController(req, res).register() };
module.exports.forgotPassword = (req, res) => { new UserController(req, res).forgotPassword() };
module.exports.setAvatar = (req, res) => { new UserController(req, res).setAvatar() };

// GET
module.exports.searchUser = (req, res) => { new UserController(req, res).searchUser() };
module.exports.getAvatar = (req, res) => { new UserController(req, res).getAvatar() };

// PATCH:
module.exports.editPassword = (req, res) => { new UserController(req, res).editPassword() };
module.exports.editUserData = (req, res) => { new UserController(req, res).editUserData() };

// PUT:
module.exports.resetPassword = (req, res) => { new UserController(req, res).resetPassword() };
module.exports.confirmRegistration = (req, res) => { new UserController(req, res).confirmRegistration() };

// DELETE:
module.exports.deleteUser = (req, res) => { new UserController(req, res).deleteUser() }