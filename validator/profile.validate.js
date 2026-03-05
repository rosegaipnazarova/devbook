const joi = require("joi")

const ProfileValidator = (data) =>{
    const schema = joi.object({
        firstName: joi.string().min(3).max(20).pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
        lastName: joi.string().min(3).max(20).pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
        phoneNumber: joi.number().required(),
        email: joi.string().required(),
        imageUrl: joi.string().required()
    })

    return schema.validate(data)
}

module.exports = ProfileValidator