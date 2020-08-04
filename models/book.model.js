const mongoose = require("../db/mongoose");
const { create } = require("./user.model");
const booksSchema = new mongoose.Schema({
   _id: String,
   name: String,
   description: String,
});
const Book = mongoose.model("book", booksSchema, "books");
/*Book.create({
   _id: "1",
   name: "thu nghiem",
   description: "day khong phai sach",
});*/
module.exports = Book;
