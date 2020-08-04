const express = require("express");
const controller = require("../controllers/users.controller");
var Router = express.Router();

Router.get("/", controller.getIndex);
Router.post("/", controller.postIndex);

Router.get("/view/:id", controller.getView);

Router.get("/search", controller.getSearch);

Router.get("/create", controller.getCreate);
Router.post("/create", controller.postCreate);

module.exports = Router;
