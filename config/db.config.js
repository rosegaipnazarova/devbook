const mongoose = require("mongoose")

async function connectDb() {
    await mongoose.connect(process.env.MONGO_URI).then(() => console.log("connected to db"))
    .catch((error) => console.log(error.message));
    
}

module.exports = connectDb