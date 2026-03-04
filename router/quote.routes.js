const { Router } = require("express")

const quoteValidatorMiddleware = require("../middleware/quote.validator.middleware")
const { getAllQuotes, addQuote, likeQuote, deleteQuote, search } = require("../controller/quote.controller")

const quoteRouter = Router()

quoteRouter.get("/get_all_quotes", getAllQuotes)
quoteRouter.get("/search", search)
quoteRouter.post("/add_quote",quoteValidatorMiddleware, addQuote)
quoteRouter.patch("/like_quote/:id", likeQuote)
quoteRouter.delete("/delete_quote/:id", deleteQuote)


module.exports = quoteRouter