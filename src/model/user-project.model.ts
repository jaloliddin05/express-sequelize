import { DataTypes } from "sequelize";
import { sequelize } from "../utils/sequelize";

const UserProject = sequelize.define("user_project", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
});

export default UserProject;
