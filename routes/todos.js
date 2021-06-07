var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");


router.route('/')
   // Get all todos
   .get(helpers.getTodos)
   // Create a todo
   .post(helpers.createTodos)



router.route('/:todoId')
   // Show single object with given ID
   .get(helpers.getTodo)

   // Update exisiting todo
   .put(helpers.updateTodo)

   // Delete existing todo
   .delete(helpers.deleteTodo)


module.exports = router;