const { Router } = require("express")
const authValidatorMiddleware = require("../middleware/auth.validator.middleware")
const { register } = require("../controller/auth.controller")
const { verify } = require("jsonwebtoken")

const authRouter = Router()

authRouter.get("/register", register)
authRouter.get("/verify", verify)


module.exports = authRouter