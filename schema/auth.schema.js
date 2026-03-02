const {Schema, model} = require("mongoose")

const Auth = new Schema({
    username : {
        type : String,
        required: [true, "username berilishi shart"],
        minLength: 3,
        maxLength: 50,
        set: (value)=>value.trim(),
        match: /^[a-zA-Z\s]+$/
    },
    email : {
        type : Date,
        required: true
    },
    password : {
        type : String,
        required: true
    },
     role : {
        type : String,
        default: "user"
    },
    otp : {
        type : String,
        required: [true, "otp kodi kiritilishi shart"],
        minLength:[4, "otp kodi juda qisqa"],
        maxLength:[6, "otp kodi juda uzun"],
        trim: true
    },
    otpTime : {
        type : Number,
        required: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
})


const AuthSchema = model("auth", Auth)
module.exports = AuthSchema