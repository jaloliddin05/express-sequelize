import { Router } from "express";

import * as projectController from "../controller/project.controller";

const router = Router();

router
  .get("/projects", projectController.getProjects)
  .get("/projects/:id", projectController.getProjectById)
  .post("/projects", projectController.createProject)
  .post("/projects/user", projectController.addUserToProject)
  .put("/projects/:id", projectController.updateProject)
  .delete("/projects/:id", projectController.deleteProject);

export default router;
