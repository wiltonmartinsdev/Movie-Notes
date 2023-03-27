import { Router } from "express";
import TagsControllers from "../controllers/TagsControllers.js";

const tagsControllers = new TagsControllers();
const tagsRoutes = Router();

tagsRoutes.get("/:user_id", tagsControllers.index);

export default tagsRoutes;
