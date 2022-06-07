import { Router } from "express";
import payroll from "./payroll.routes.js";
import municipality from "./municipality.routes.js";
import region from "./region.routes.js";
import typePayroll from "./typePayroll.routes.js";
import citas from "./citas.routes.js";

const router = Router();

router.use("/payroll", payroll);
router.use("/municipality", municipality);
router.use("/region", region);
router.use("/typePayroll", typePayroll);
router.use("/citas", citas);

export default router;
