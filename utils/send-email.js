const nodemailer = require("nodemailer")
const CustomErrorhandler = require("../error/custom-error.handle")

async function sendMessage(code, email) {
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"rosegaipnazarova@gmail.com"
            }
        })
    }catch(error){
        throw CustomErrorhandler.InternalServerError(error.message)
    }
}  

module.exports = sendMessage