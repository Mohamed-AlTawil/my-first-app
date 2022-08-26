import {
  Get,
  Post,
  Route,
  SuccessResponse,
  Body,
  Response,
  Example,
  Delete,
  Path,
  Put,
} from "tsoa";
import { Book } from "../types/interfaces";
import { Model, Types } from "mongoose";

const BookModel: Model<Book> = require("../models/book");

@Route("books")
export default class BookController {
  /**
   * Get List of All books
   */
  @Get("/")
  public async get(): Promise<Array<Book>> {
    return await BookModel.find().populate("author");
  }
  /**
   * Get a book details
   * @example bookId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested book in not found")
  @Get("{bookId}")
  public async getBook(bookId: string): Promise<Book | null> {
    return await BookModel.findById(bookId).populate("author");
  }
  /**
   * Delete a book
   * @example bookId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested book in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{bookId}")
  public async deleteBook(bookId: string) {
    return await BookModel.findByIdAndDelete(bookId);
  }

  /**
   * Create a book
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<Book>({
    title: "Book Tiltle",
    author: "6300e18b3bbd975cf6459983",
    summary: "Book Summary",
    isbn: "Book isbn",
    genre: ["6300e18d3bbd975cf645998e"],
  })
  @Post("create")
  public async createBook(@Body() book: Partial<Book>): Promise<Book> {
    return new BookModel({
      ...book,
    }).save();
  }

  /**
   * Update a book
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Put("update/{bookId}")
  public async updateBook(
    @Path() bookId: string,
    @Body() book: Partial<Book>
  ): Promise<Book | null> {
    let bookDocument = await BookModel.findById(bookId);
    if (bookDocument != null) {
      bookDocument.title = book.title ?? bookDocument.title;
      bookDocument.author = book.author ?? bookDocument.author;
      bookDocument.summary = book.summary ?? bookDocument.summary;
      bookDocument.isbn = book.isbn ?? bookDocument.isbn;
      bookDocument.genre = book.genre ?? bookDocument.genre;
      return await bookDocument.save();
    }
    return null;
  }
}
