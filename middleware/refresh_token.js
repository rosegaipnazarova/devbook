const CustomErrorhandler = require("../error/custom-error.handle")
const { refresh_token } = require("../utils/jwt")


module.exports= function(req, res, next) {
    try{
        const authorization = req.headers.refresh_token

        if(!authorization){
            throw CustomErrorhandler.UnAuthorized("refresh token is not defined")
        }

     
        const decode = jwt.verify(authorization, process.env.REFRESH_SECRET_KEY)

        const accsessToken = refresh_token({
            id: decode._id,
            role: decode.role,
            email: decode.email
        })

        res.status(200).json({
           accsessToken 
        })
    }catch(error){
        next(error)
    }
}