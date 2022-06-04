import { Router } from "express";
import { index } from "../controllers/municipality.controller.js";

const router = Router();

router.get("/", index);

export default router;
