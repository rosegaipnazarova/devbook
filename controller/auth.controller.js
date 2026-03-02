const CustomErrorhandler = require("../error/custom-error.handle")
const AuthorSchema = require("../schema/author.schema")

const register = async (req, res, next) =>{
    try{
        const {username, email, password} = req.body
        const foundedUser = await AuthorSchema.findOne({email: email})

        if(foundedUser){
            throw CustomErrorhandler.BadRequest("User alresdy exist")
        }

        const hashPassword = await bcrypt.hash(password, 12)

        res.status(200).json(authors)
    }catch(error){
        next(error)
    }
}

module.exports ={
    register
}