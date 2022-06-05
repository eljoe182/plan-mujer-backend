import { Router } from "express";
import {
  index,
  show,
  store,
  create,
  destroy,
} from "../controllers/payroll.controller.js";

const router = Router();

router.get("/", index);
router.get("/create", create);
router.post("/store", store);
router.get("/show/:id", show);
router.delete("/destroy/:id", destroy);

export default router;
