import { Request, Response } from "express";

const Author = require("../models/author");

// Display list of all Authors.
exports.author_list = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
exports.author_detail = (req: Request, res: Response) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Handle Author create on POST.
exports.author_create_post = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Handle Author delete on POST.
exports.author_delete_post = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Handle Author update on POST.
exports.author_update_post = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
