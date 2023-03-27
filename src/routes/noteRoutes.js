import { Router } from "express";
import NoteControllers from "../controllers/NoteControllers.js";

const noteControllers = new NoteControllers();
const noteRoutes = Router();

noteRoutes.post("/:user_id", noteControllers.create);
noteRoutes.get("/:id", noteControllers.show);
noteRoutes.get("/", noteControllers.index);
noteRoutes.delete("/:id", noteControllers.delete);

export default noteRoutes;
