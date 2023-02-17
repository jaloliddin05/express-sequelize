import { Request, Response } from "express";
import { User } from "../model";

export async function getUsers(req: Request, res: Response) {
  const users = await User.findAll();
  res.send(users);
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const users = await User.findOne({ where: { id } });
  res.send(users);
}

export async function createUser(req: Request, res: Response) {
  const userData = req.body;
  const newUser = await User.create(userData);
  res.send(newUser);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const userData = req.body;
  const updateUser = await User.update(userData, { where: { id } });
  res.send("Updated");
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const deletedUser = await User.destroy({ where: { id } });
  res.send("Deleted");
}
