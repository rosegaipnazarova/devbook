const { Router } = require("express")
const { getAllBooks, getOneBook, addBook, updateBook, deleteBook } = require("../controller/book.controller")
const bookValidatorMiddleware = require("../middleware/book.validator.middleware")
const authorization = require("../middleware/authorization")

const bookRouter = Router()

bookRouter.get("/get_all_books", getAllBooks)
bookRouter.get("/get_one_book/:id", getOneBook)
bookRouter.post("/add_book",bookValidatorMiddleware, authorization, addBook)
bookRouter.put("/update_book/:id", authorization, updateBook)
bookRouter.delete("/delete_book/:id", authorization, deleteBook)


module.exports = bookRouter