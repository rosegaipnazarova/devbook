const CustomErrorhandler = require("../error/custom-error.handle")
const profileValidator = require("../validator/profile.validate")

module.exports= function(req, res, next){
    const {error} =profileValidator(req.body)

    if(error){
        throw CustomErrorhandler.BadRequest(error.message)
    }

    next()
}