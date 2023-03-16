import User from "./user.model";
import Project from "./project.model";
import UserProject from "./user-project.model";

User.belongsToMany(Project, { through: UserProject });
Project.belongsToMany(User, { through: UserProject });
UserProject.belongsTo(User);
UserProject.belongsTo(Project);
User.hasMany(UserProject);
Project.hasMany(UserProject);

export { default as User } from "./user.model";
export { default as Project } from "./project.model";
export { default as UserProject } from "./user-project.model";
