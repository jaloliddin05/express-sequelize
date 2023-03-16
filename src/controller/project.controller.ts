import { Request, Response } from "express";
import { Project, User } from "../model";
import { UserProject } from "../model";

export async function getProjects(req: Request, res: Response) {
  const users = await Project.findAll();
  res.send(users);
}

export async function getProjectById(req: Request, res: Response) {
  const { id } = req.params;
  const users = await Project.findOne({
    where: { id },
    include: {
      model: UserProject,
      include: [
        {
          model: User,
          through: { attributes: [] }, // Hide unwanted `PlayerGameTeam` nested object from results
        },
      ],
    },
  });
  res.send(users);
}

export async function createProject(req: Request, res: Response) {
  const userData = req.body;
  const newUser = await Project.create(userData);
  res.send(newUser);
}

export async function updateProject(req: Request, res: Response) {
  const { id } = req.params;
  const userData = req.body;
  const updateUser = await Project.update(userData, { where: { id } });
  res.send("Updated");
}

export async function deleteProject(req: Request, res: Response) {
  const { id } = req.params;
  const deletedUser = await Project.destroy({ where: { id } });
  res.send("Deleted");
}

export async function addUserToProject(req: Request, res: Response) {
  const { userId, projectId } = req.body;
  const addUser = await UserProject.create({
    userId,
    projectId,
  });
  res.send(addUser);
}
