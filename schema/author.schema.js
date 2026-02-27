const {Schema, model} = require("mongoose")

const Author = new Schema({
    fullName : {
        type : String,
        required: [true, "fullName berilishi shart"],
        minLength: 3,
        maxLength: 50,
        set: (value)=>value.trim(),
        match: /^[a-zA-Z\s]+$/
    },
    birthDate : {
        type : Date,
        required: true
    },
    deathDate : {
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
    bio : {
        type : String,
        required: [true, "Adib haqida malumot kiritilishi shart"],
        minLength:[100, "Malumot juda qisqa"],
        maxLength:[5000, "Malumot juda uzun"],
        trim: true
    },
    work : {
        type : String,
        required: true,
        validate:{ 
            validator: function (nom) {
            return nom.length>0
        },
        message: "Royhat bosh bolmasliki zarur"
    },
        trim: true
    },
    imageUrl : {
        type : String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})


const AuthorSchema = model("author", Author)
module.exports = AuthorSchema