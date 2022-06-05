import { Router } from "express";
import { index, show, store } from "../controllers/payroll.controller.js";

const router = Router();

router.get("/", index);
router.get("/show/:id", show);
router.post("/store", store);

export default router;
