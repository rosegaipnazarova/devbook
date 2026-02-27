const joi = require("joi")

const authorValidator = (data) =>{
    const schema = joi.object({
        fullName: joi.string().min(3).max(50).pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
        birtDate: joi.less('now').required(),
        deathDate: joi.string().required(),
        period: joi.string().valid('qadimgi davr','o\'rta asrlar davri','uyg\'onish va klassitsizm davri','realizm va modernizm davri','zamonaviy davr').required(),
        bio: joi.string().min(100).max(5000).trim().required(),
        work: joi.string().required(),
        imageUrl: joi.string().required()
    })

    return schema.validate(data)
}

module.exports = authorValidator