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
router.get("/collaborateurs", EmployeeController.browse);
router.get("/projets", ProjectController.browse);
router.get("/idees", IdeaController.browse);
router.post("/idees", IdeaController.add);
router.get("/projets/:id", ProjectController.read);
router.get("/collaborateurs/:id", EmployeeController.read);

module.exports = router;
