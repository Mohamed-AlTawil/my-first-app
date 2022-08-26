import { Schema, model } from "mongoose";
import { IBook } from "../types/interfaces";

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "www.booklibrary.com/books/" + this._id;
});

//Export model
module.exports = model<IBook>("Book", BookSchema);
