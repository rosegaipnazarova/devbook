const BookSchema = require("../schema/book.schema")


const getAllBooks = async (req , res) =>{
    try{
      const authors = await BookSchema.find()

      res.status(200).json(books)
    }catch(error){
        return res.status(500).json({message : error.message})
    }
}


const getOneBook = async (req , res) =>{
    try{

        const { id } = req.params

        const foundedBook = await BookSchema.findById(id)
        if (!foundedBook) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        res.status(200).json(foundedBook)


    }catch(error){
        return res.status(500).json({message : error.message})
    }
}


const addBook = async (req , res) =>{
    try{

        const {title, pages, publishedYear, publishedHome, description, period, genre, imageUrl} = req.body

        await BookSchema.create({title, pages, publishedYear, publishedHome, period, description, genre, imageUrl})

        res.status(201).json({
            message : "Added new book"
        })

    }catch(error){
        return res.status(500).json({message : error.message})
    }
}


const updateBook = async (req , res) =>{
    try{

         const {title, pages, publishedYear, publishedHome, description, period, genre, imageUrl} = req.body
        const { id } = req.params

        const foundedBook = await BookSchema.findById(id)
        if (!foundedBook) {
            return res.status(404).json({
                message: "Book not found"
            })
        }
        await BookSchema.findByIdAndUpdate(id, {title, pages, publishedYear, publishedHome, description, period, genre, imageUrl})

        res.status(200).json({
            message: "Updated book"
        })

    }catch(error){
        return res.status(500).json({message : error.message})
    }
}


const deleteBook = async (req , res) =>{
    try{

        const { id } = req.params

        const foundedBook = await BookSchema.findById(id)
        if (!foundedBook) {
            return res.status(404).json({
                message: "Book not found"
            })
        }
    await BookSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Deleted book"
        })

    }catch(error){
        return res.status(500).json({message : error.message})
    }
}


module.exports = {
   getAllBooks,
   getOneBook,
   addBook,
   updateBook,
   deleteBook
}