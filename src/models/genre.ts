import { Schema, model } from "mongoose";
import { IGenre } from "../types/interfaces";

const GenreSchema = new Schema<IGenre>({
  name: { type: String, required: true, minlength: 3, maxLength: 100 },
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

//Export model
module.exports = model<IGenre>("Genre", GenreSchema);
