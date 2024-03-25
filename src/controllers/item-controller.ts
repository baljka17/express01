import { Request, Response, NextFunction } from "express";
import Item from "../models/item-model";

const items: Item[] = [new Item(1234, "Eggs", 16)];

const getItems = (req: Request, res: Response, next: NextFunction) => {
  //   throw new Error("Something wrong!");
  res.status(200).json(items);
};

export default getItems;
