import { Request, Response } from "express";

const BookModel = require("../models/book");

// Display list of all books.
exports.book_list = (req: Request, res: Response) => {
  BookModel.find()
    .populate("author")
    .then(async (centers: any) => {
      res.json(centers);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(400).json(err);
    });
};

// Display detail page for a specific book.
exports.book_detail = (req: Request, res: Response) => {
  BookModel.findById(req.params.id)
    .then((book: any) => res.json(book))
    .catch((err: any) => res.status(400).json(err));
};

// Handle book create on POST.
exports.book_create_post = (req: any, res: Response) => {
  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary;
  const isbn = req.body.isbn;
  const genre = req.body.genre;
  const book = new BookModel({
    title,
    author,
    summary,
    isbn,
    genre,
  });
  book
    .save()
    .then(async (e: any) => {
      res.json("Book Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book delete on POST.
exports.book_delete_post = (req: Request, res: Response) => {
  BookModel.findByIdAndDelete(req.params.id)
    .then((e: any) => {
      res.json("Book Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book update on POST.
exports.book_update_post = (req: Request, res: Response) => {
  BookModel.findById(req.params.id)
    .then((book: any) => {
      book.title = req.body.title;
      book.author = req.body.author;
      book.summary = req.body.summary;
      book.isbn = req.body.isbn;
      book.genre = req.body.genre;
      book
        .save()
        .then((e: any) => {
          res.json("Book Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};
