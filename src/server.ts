import * as express from "express";

import { sequelize } from "./utils/sequelize";

sequelize
  .authenticate()
  .then(() => console.log("Db connected successfully"))
  .catch((err) => console.log(err));

const app: express.Application = express();

app.listen(5000, () => {
  console.log(5000);
});
