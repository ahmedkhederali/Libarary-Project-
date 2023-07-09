const Books = require("../models/Books");
const cloudinary = require("cloudinary");
const Redis = require("redis");

exports.addBooks = async (req, res) => {
    try {
        const newBook = await Books.create(req.body);

        res.status(201).json({
            newBook
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.updateBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            book
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.deleteBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);

        res.status(200).json({
            book
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getAllBooks = async (req, res) => {
    try {
        const book = await Books.find({})

        res.status(200).json({
            book,
            books_total: book.length
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);

        res.status(200).json({
            book
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
// like Action
exports.addedLike = async (req, res) => {
    try {
      const book = await Books.findById(req.params.id);
      var newlikes = book.likes + 1;
      await Books.findByIdAndUpdate({ _id: req.params.id }, { likes: newlikes });
  
      res.status(200).json({ book, msg: "successFully added Likes" });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        status: "failed",
      });
    }
  };
exports.deleteLike = async (req, res) => {
    try {
      const book = await Books.findById(req.params.id);
      var newlikes = book.likes - 1;
      if (newlikes < 0) newlikes = 0;
      await Books.findByIdAndUpdate({ _id: req.params.id }, { likes: newlikes });
  
      res.status(200).json({ book, msg: "successFully remove Like" });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        status: "failed",
      });
    }
  };