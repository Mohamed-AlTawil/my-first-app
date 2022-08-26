import express from "express";
import BookController from "../controllers/bookController";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new BookController();
  controller
    .getBooks()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:bookId", async (req, res) => {
  const controller = new BookController();
  controller
    .getBook(req.params.bookId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested book in not found");
    });
});
router.delete("/:bookId", async (req, res) => {
  const controller = new BookController();
  controller
    .deleteBook(req.params.bookId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested book in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new BookController();
  controller
    .createBook(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:bookId", (req, res) => {
  const controller = new BookController();
  controller
    .updateBook(req.params.bookId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested book in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
