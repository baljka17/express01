import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   throw new Error("Something wrong!");
  res.status(200).json({ message: "Success done!" });
});

export default router;
