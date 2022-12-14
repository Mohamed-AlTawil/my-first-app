import { Schema, model } from "mongoose";
import { BookInstance } from "../types/interfaces";

const BookInstanceSchema = new Schema<BookInstance>({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, //reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

//Export model
module.exports = model<BookInstance>("BookInstance", BookInstanceSchema);
