const {Schema, model} = require("mongoose")

const Book = new Schema({
    text : {
        type : String,
        minLength:3,
        maxLength:200,
        required: true,
    },
    pages : {
        type : Number,
        required: true
    },
    publishedYear : {
        type : Number,
        required: true
    },
    publishedHome : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    period : {
                type : String,
        required: true,
        enum: {
            values:["qadimgi davr", "o'rta asrlar davri", "uyg'onish va klassitsizm davri", "realizm va modernizm davri", "zamonaviy davr"],
            message: "{VALUE} bunday qiymat qabul qilinmaydi"
        },
        set: (value)=>value.trim().toLowerCase()
    },
    genre : {
        type : String,
        required: true,
        enum: {
            values:["Comedy", "Romance", "Thriller", "Horror", "Action","Documentary","Science fiction", "Fantasy"],
            message: "{VALUE} bunday qiymat qabul qilinmaydi"
        },
        trim: true
    },
    imageUrl : {
        type : String,
        required: true
    },
    authorInfo: {
        type: Schema.Types.ObjectId,
        ref: "author",
        required : true
    }
},{
    versionKey: false,
    timestamps: true
})


const BookSchema = model("book", Book)
module.exports = BookSchema