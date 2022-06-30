const express = require("express");

const {
  ItemController,
  EmployeeController,
  IdeaController,
  ProjectController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
router.get("/collaborateur", EmployeeController.browse);
router.get("/projet", IdeaController.browse);
router.get("/idées", ProjectController.browse);

module.exports = router;
