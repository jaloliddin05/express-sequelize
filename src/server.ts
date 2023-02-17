import * as express from "express";

import { sequelize } from "./utils/sequelize";
import { User } from "./model";
import { UserRouter } from "./router";

sequelize
  .authenticate()
  .then(() => console.log("Db connected successfully"))
  .catch((err) => console.log(err));

User.sync({ force: false });

const app: express.Application = express();

app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => {
  console.log(5000);
});
