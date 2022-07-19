import { Router } from "express";
import {
  index,
  show,
  edit,
  update,
  store,
  destroy,
} from "../controllers/payroll.controller.js";

const router = Router();

router.get("/", index);
router.post("/store", store);
router.get("/show/:query", show);
router.get("/edit/:id", edit);
router.put("/update/:id", update);
router.delete("/destroy/:id", destroy);

export default router;
