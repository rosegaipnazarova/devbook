const {Schema, model} = require("mongoose")

const Profile = new Schema({
    firstName : {
        type : String,
        required: [true, "firstName berilishi shart"],
        minLength: 3,
        maxLength: 20,
        set: (value)=>value.trim(),
        match: /^[a-zA-Z\s]+$/
    },
    lastName : {
        type : String,
        required: [true, "lastName berilishi shart"],
        minLength: 3,
        maxLength: 20,
        set: (value)=>value.trim(),
        match: /^[a-zA-Z\s]+$/
    },
    phoneNumber : {
        type : String,
        required: true,
        validate: {
            validator: function(value){
                return /^\+998\d{2} \d{3} \d{2} \d{2}/.test(value)
            },
            message: "Phone number +998 XX XXX XX XX"
        }
    },
    email : {
         type : Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true
    },
   
    imageUrl : {
        type : String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})


const ProfileSchema = model("profile", Profile)
module.exports = ProfileSchema