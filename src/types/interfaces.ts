import { PopulatedDoc, Document } from "mongoose";

export interface Author {
  _id?: string;
  first_name: string;
  family_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  url?: string;
}
export interface Book {
  _id?: string;
  title: string;
  author: string | Author;
  summary: string;
  isbn: string;
  genre?: string[] | Genre[];
  url?: string;
}
export interface BookInstance {
  _id: string;
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
