import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      // console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  getAll = async (req, res) => {
    try {
      const books = await this.bookRepository.getAll();
      
      if (!books) {
        res.status(404).send("books not found.");
      } else {
        res.status(200).send(books);
      }
    } catch (err) {
      // console.log("error while getting all books " + err);
      res.status(500).json({ error: "Failed to find books" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      // console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };


  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    try {
      const { genre } = req.params;
      const books = await this.bookRepository.listBooksByGenre(genre);
      
      if (books.length === 0) {
        res.status(404).send("Books not found of this genre");
      } else {
        res.status(200).send(books);
      }
    } catch (err) {
      // console.log(err);
      res.status(500).json({ error: "Failed to find genre book" });
    }
  };

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    try {
      const { bookId } = req.params;
      const { quantity } = req.body;
      
      const update = await this.bookRepository.updateBookAvailability(
        bookId,
        quantity
      );
      if (update) {
        res.status(200).send(update);
      } else {
        res.status(500).send("something went wrong");
      }
    } catch (err) {
      // console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //deletion of book
  deleteBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      const deletedBook = await this.bookRepository.deleteBookById(bookId);
      if (deletedBook) {
        res.status(200).send(deletedBook);
      } else {
        res.status(404).send("something went wrong");
      }
    } catch (err) {
      // console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };
}
