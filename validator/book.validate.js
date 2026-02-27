const joi = require("joi")

const bookValidator = (data) =>{
    const schema = joi.object({
        title: joi.object().min(3).max(200).required(),
        page: joi.number().required(),
        publishedYear: joi.string().required(),
        publishedHome: joi.string().required(),
        description: joi.string().required(),
        period: joi.string().valid('qadimgi davr','o\'rta asrlar davri','uyg\'onish va klassitsizm davri','realizm va modernizm davri','zamonaviy davr').required(),
        genre: joi.string().valid("Comedy", "Romance", "Thriller", "Horror", "Action","Documentary","Science fiction", "Fantasy").required(),
        imageUrl: joi.string().required(),
        authorInfo: joi.string().required(),

    })

    return schema.validate(data)
}

module.exports = bookValidator