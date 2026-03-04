const CustomErrorhandler = require("../error/custom-error.handle")

module.exports = function (err, req, res, next) {
     if(err instanceof CustomErrorhandler){
        return res.status(err,status || 400).json({message: err.message, errors: err.errors})
    }

    if(err.name === "ValidationError"){
        const validationErrors = Object.values(err.errors).map((error)=> error.message)

        res.status(400).json({
            messageName: "ValidationError",
            errors: validationErrors
        })
    }
}
