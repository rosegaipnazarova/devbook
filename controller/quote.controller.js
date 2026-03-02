const CustomErrorhandler = require("../error/custom-error.handle")
const QuoteSchema = require("../schema/quote.schema")

const getAllQuotes = async (req, res, next) => {
    try {
        const quotes = await QuoteSchema.find()

        res.status(200).json(quotes)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { searchingValue } = req.query

        const result = await QuoteSchema.find({
            text: { $regex: searchingValue, $options: "i" } 
        })
        .populate("authorId", "fullName")
        .populate("bookId", "title")

        res.status(200).json(quotes)
    } catch (error) {
        next(error)
    }
}

const addQuote = async (req, res, next) => {
    try {
        const { text, authorId, bookId } = req.body

        const newQuote = await QuoteSchema.create({ text, authorId, bookId })

        res.status(201).json({
            message: "Added new quote"
        })
    } catch (error) {
        next(error)
    }
}

const likeQuote = async (req, res, next) => {
    try {
        const { id } = req.params

        const updatedQuote = await QuoteSchema.findByIdAndUpdate(
            id,
            { $inc: { likes: 1 } },
            { new: true }
        )

        if (!updatedQuote) {
            throw CustomErrorhandler.NotFound("quote not found")
        }

        res.status(200).json({
            message: "Liked"
        })
    } catch (error) {
        next(error)
    }
}

const deleteQuote = async (req, res, next) => {
    try {
        const { id } = req.params
        const foundedQuote = await QuoteSchema.findByIdAndDelete(id)

        if (!foundedQuote) {
            throw CustomErrorhandler.NotFound("quote not found")
        }

        res.status(200).json({ message: "deleted quote" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllQuotes,
    search,
    addQuote,
    likeQuote,
    deleteQuote
}