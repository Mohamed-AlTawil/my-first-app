import { PopulatedDoc, Document, Types } from "mongoose";

export interface Author {
  _id: Types.ObjectId;
  first_name: string;
  family_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  url: string;
}
export interface Book {
  _id: Types.ObjectId;
  title: string;
  author: PopulatedDoc<Author & Document>;
  summary: string;
  isbn: string;
  genre: Array<PopulatedDoc<Genre & Document>>;
  url: string;
}
export interface BookInstance {
  _id: Types.ObjectId;
  book: PopulatedDoc<Book & Document>;
  imprint: string;
  status: "Available" | "Maintenance" | "Loaned" | "Reserved";
  due_back: Date;
  url: string;
}
export interface Genre {
  _id: Types.ObjectId;
  name: string;
  url: string;
}
