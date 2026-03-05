const express = require("express")
const cors = require("cors")
const { connect } = require("mongoose")
const connectDb = require("./config/db.config")
const authorRouter = require("./router/author.routes")
const bookRouter = require("./router/book.routes")
const quoteRouter = require("./router/quote.routes")
const errorMiddleware = require("./middleware/error.middleware")
require("dotenv").config()
const cookieParser= require("cookie-parser")
const profileRouter = require("./router/profile.routes")

const PORT = process.env.PORT || 3000
const app = express()

connectDb()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


// router

app.use(authorRouter)
app.use(bookRouter)
app.use(quoteRouter)
app.use(profileRouter)

app.use(errorMiddleware)

app.listen(PORT, ()=>{
    console.log("server is rinning at :  " + PORT);
})