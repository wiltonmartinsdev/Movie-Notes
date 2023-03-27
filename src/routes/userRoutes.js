import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post("/", userControllers.create);
userRoutes.put("/:id", userControllers.update);

export default userRoutes;
