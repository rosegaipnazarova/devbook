const { Router } = require("express")
const authValidatorMiddleware = require("../middleware/auth.validator.middleware")
const { register, login, verify } = require("../controller/auth.controller")

const authRouter = Router()

authRouter.get("/register", register)
authRouter.get("/verify", verify)
authRouter.get("/login", login)



module.exports = authRouter