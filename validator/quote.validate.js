const joi = require("joi")

const quoteValidator = (data) =>{
    const schema = joi.object({
        text: joi.string().min(3).max(200).required(),
        authorId: joi.string().required(),
        bookId: joi.string().required(),
        likes: joi.number().default(0).required(),
    })

    return schema.validate(data)
}

module.exports = quoteValidator