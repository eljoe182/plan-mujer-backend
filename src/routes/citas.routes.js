import { Router } from "express";
import { index,store } from "../controllers/citas.controller.js";

const router = Router();

router.get("/", index);
router.post("/store", store);
export default router;

