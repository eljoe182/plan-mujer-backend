import { Router } from "express";
import { index } from "../controllers/payroll.controller.js";

const router = Router();

router.get("/", index);

export default router;
