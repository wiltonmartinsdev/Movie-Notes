import { Router } from "express";
import userRoutes from "./userRoutes.js";
import noteRoutes from "./noteRoutes.js";
import tagsRoutes from "./tagsRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", noteRoutes);
routes.use("/tags", tagsRoutes);

export default routes;
