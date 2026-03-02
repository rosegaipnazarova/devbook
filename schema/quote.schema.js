const {Schema, model} = require("mongoose")

const Quote = new Schema({
     text : {
        type : String,
        minLength:3,
        maxLength:200,
        required: true,
        trim: true
    },
    authorId : {
        type : Schema.Types.ObjectId,
        ref: "author",
        required: true
    },
    bookId : {
        type : Schema.Types.ObjectId,
        ref: "book",
        required: true
    },
    likes : {
        type : Number,
    }
},
    {
    versionKey: false,
    timestamps: true
    

})


const QuoteSchema = model("quote", Quote)
module.exports = QuoteSchema
