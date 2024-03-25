import { RequestHandler } from "express";
import Item from "../models/item-model";
import { v4 } from "uuid";

const items: Item[] = [new Item("1234", "Eggs", 16)];

export const getItems: RequestHandler = (req, res, next) => {
  //   throw new Error("Something wrong!");
  res.status(200).json(items);
};

export const createItem: RequestHandler = (req, res, next) => {
  const newItem: Item = req.body as Item;
  newItem.id = v4();
  items.push(newItem);
  res.status(200).json({ message: "Has been added!", items });
};

export const updateItem: RequestHandler = (req, res, next) => {
  const itemId = req.params.id;
  const updatedItem = req.body as Item;
  const itemIndex = items.findIndex((item) => item.id === itemId);

  if (itemIndex < 0) {
    throw new Error("Item not found!");
  }
  items[itemIndex] = new Item(
    items[itemIndex].id,
    updatedItem.name,
    updatedItem.quantity
  );
  res.json({ message: "Has been updated!", items });
};

export const deleteItem: RequestHandler = (req, res, next) => {
  const itemId = req.params.id;
  const itemIndex = items.findIndex((item) => item.id === itemId);

  if (itemIndex < 0) {
    throw new Error("Item not found!");
  }
  items.splice(itemIndex, 1);
  res.json({ message: "Has been deleted!", items });
};
