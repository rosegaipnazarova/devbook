const CustomErrorhandler = require("../error/custom-error.handle")
const AuthorSchema = require("../schema/author.schema")
const { access_token } = require("../utils/jwt")
const sendMessage = require("../utils/send-email")

const register = async (req, res, next) =>{
    try{
        const {username, email, password} = req.body
        const foundedUser = await AuthorSchema.findOne({email})

        if(foundedUser){
            throw CustomErrorhandler.BadRequest("User alresdy exist")
        }

        const hashPassword = await bcrypt.hash(password, 12)


    const code = +Array.from({length: 6},() => Math.round(Math.random()*6)).join("")
      await  sendMessage(code, email)

      await AuthorSchema.create({
        username,
        email,
        password:hashPassword,
        otp: code,
        otpTime: Date.noe()+12000
      })

        res.status(200).json({message: "Registered"})
    }catch(error){
        next(error)
    }
}


const verify = async (req, res, next) =>{
    try{
        const { email, code} = req.body
        const foundedUser = await AuthorSchema.findOne({email})

        if(foundedUser){
            throw CustomErrorhandler.BadRequest("User not found")
        }

        if(!foundedUser.otp){
            throw CustomErrorhandler.UnAuthorized("Otp not found")
        }

         if(foundedUser.otp !== code){
            throw CustomErrorhandler.UnAuthorized("wrong otp")
        }

         if(foundedUser.otpTime < Date.now()){
            throw CustomErrorhandler.UnAuthorized("otp expired")
        }


        await AuthorSchema.findByIdAndUpdate(foundedUser._id, {otp: "", otpTime: 0})

        const accsessToken = access_token({id: foundedUser._id, role: foundedUser.role, email: foundedUser.email})
        const refreshToken = refresh_token({id: foundedUser._id, role: foundedUser.role, email: foundedUser.email})

        res.cookie("refresh_token", token, {maxAge:15*1000*60, httpOnly: true})

        res.status(200).json({
            message: "success",
            accsessToken
        })
    }catch(error){
        next(error)
    }
}

module.exports ={
    register,
    verify
}