import { Router } from "express";
import { index } from "../controllers/typePayroll.controller.js";

const router = Router();

router.get("/", index);

export default router;
