import * as express from "express";

import { sequelize } from "./utils/sequelize";
import { User, Project, UserProject } from "./model";
import { UserRouter, ProjectRouter } from "./router";

sequelize
  .authenticate()
  .then(() => console.log("Db connected successfully"))
  .catch((err) => console.log(err));

User.sync({ force: false });
Project.sync({ force: false });
UserProject.sync({ force: false });

const app: express.Application = express();

app.use(express.json());
app.use(UserRouter, ProjectRouter);

app.listen(5000, () => {
  console.log(5000);
});
