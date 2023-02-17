import { Router } from "express";

import * as userController from "../controller/user.controller";

const router = Router();

router
  .get("/users", userController.getUsers)
  .get("/users/:id", userController.getUserById)
  .post("/users", userController.createUser)
  .put("/users/:id", userController.updateUser)
  .delete("/users/:id", userController.deleteUser);

export default router;
