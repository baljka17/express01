import { Router } from "express";
import {
  getItems,
  createItem,
  deleteItem,
} from "../controllers/item-controller";

const router = Router();

router.get("/", getItems);
router.post("/", createItem);
router.patch("/", updateItem);
router.delete("/", deleteItem);

export default router;
