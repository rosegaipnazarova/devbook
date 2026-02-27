const CustomErrorhandler = require("../error/custom-error.handle")
const AuthorSchema = require("../schema/author.schema")


const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorSchema.find()

        res.status(200).json(authors)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { searchingValue } = req.query
        const result = await AuthorSchema.find({
            fullName: { $regex: searchingValue, $options: "i" },
            birthDate: { $eq: searchingValue }
        })

        res.status(200).json(authors)
    } catch (error) {
        next(error)
    }
}


const getOneAuthor = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedAuthor = await AuthorSchema.findById(id)
        if (!foundedAuthor) {
           throw CustomErrorhandler.NotFound("Author not found")
            }
        

        res.status(200).json(foundedAuthor)


    } catch (error) {
        next(error)
    }
}


const addAuthor = async (req, res, next) => {
    try {

        const { fullName, birthDate, deathDate, period, bio, work, imageUrl } = req.body

        await AuthorSchema.create({ fullName, birthDate, deathDate, bio, work, period, imageUrl })

        res.status(201).json({
            message: "Added new author"
        })

    } catch (error) {
        next(error)
    }
}


const updateAuthor = async (req, res, next) => {
    try {

        const { fullName, birthDate, deathDate, period, bio, work, imageUrl } = req.body
        const { id } = req.params

        const foundedAuthor = await AuthorSchema.findById(id)
        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author not found"
            })
        }
        await AuthorSchema.findByIdAndUpdate(id, { fullName, birthDate, deathDate, bio, work, period, imageUrl })

        res.status(200).json({
            message: "Updated author"
        })

    } catch (error) {
        next(error)
    }
}


const deleteAuthor = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedAuthor = await AuthorSchema.findById(id)
        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author not found"
            })
        }
        await AuthorSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Deleted author"
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllAuthors,
    getOneAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor,
    search
}