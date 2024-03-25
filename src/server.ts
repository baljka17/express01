import express, { Router, Request, Response, NextFunction } from "express";
import router from "./routers/router";

const server = express();

server.use("/shop", router);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

server.listen(3000);
