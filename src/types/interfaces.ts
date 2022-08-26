import { Types } from "mongoose";

/**
 * this is an author interface
 */
export interface IAuthor {
  _id?: Types.ObjectId | string;
  /**
   * this only first name
   */
  first_name: string;
  family_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  url?: string;
}
export interface IBook {
  _id?: Types.ObjectId | string;
  title: string;
  author: string | Types.ObjectId | IAuthor;
  summary: string;
  isbn: string;
  genre?: string[] | Types.ObjectId[] | IGenre[];
  url?: string;
}
export interface IBookInstance {
  _id?: Types.ObjectId | string;
  book: Types.ObjectId | IBook;
  imprint: string;
  status: "Available" | "Maintenance" | "Loaned" | "Reserved";
  due_back: Date;
  url?: string;
}
export interface IGenre {
  _id?: Types.ObjectId | string;
  name: string;
  url?: string;
}
