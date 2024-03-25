import { Router } from "express";
import controller from "../controllers/item-controller";

const router = Router();

router.get("/", controller);

export default router;
