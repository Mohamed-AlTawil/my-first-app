import BookController from "../controllers/bookController";
import { Model, Types } from "mongoose";
import { IBook } from "../types/interfaces";

describe("BookController", () => {
  const BookModel: Model<IBook> = require("../models/book");
  const controller = new BookController();

  describe("createBook", () => {
    it("should be created correctly", async () => {
      expect(
        async () =>
          await controller.createBook({
            _id: "6300e18b3bbd975cf6459983",
            isbn: "isbn",
            title: "test book",
            author: new Types.ObjectId(2),
            summary: "summary",
          })
      ).not.toThrow();
    });
  });

  describe("getBook", () => {});
  it("should get a book correctly", async () => {
    expect(
      async () => await controller.getBook("6300e18b3bbd975cf6459983")
    ).not.toThrow();

    await controller.getBook("6300e18b3bbd975cf6459983").then(async (book) => {
      expect(book?.title).toBe("test book");
    });
  });
});
