import { PopulatedDoc, Document, Types } from "mongoose";

export interface Author {
  _id?: string;
  first_name: string;
  family_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  url?: string;
}
export interface Book {
  _id?: string | Types.ObjectId;
  title: string;
  /**
   * The author should be one of the Autors
   */
  author: string | Types.ObjectId | Author;
  summary: string;
  isbn: string;
  genre?: string[] | Types.ObjectId | Genre[];
  url?: string;
}
export interface BookInstance {
  _id: string | Types.ObjectId;
  book: PopulatedDoc<Book & Document>;
  imprint: string;
  status: "Available" | "Maintenance" | "Loaned" | "Reserved";
  due_back: Date;
  url: string;
}
export interface Genre {
  _id: string;
  name: string;
  url: string;
}
