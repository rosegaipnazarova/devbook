const CustomErrorhandler = require("../error/custom-error.handle")
const ProfileSchema = require("../schema/profile.schema")

const getAllProfiles = async (req, res, next) => {
    try {
        const profiles = await ProfileSchema.find()
        res.status(200).json(profiles)
    } catch (error) {
        next(error)
    }
}

const getOneProfile = async (req, res, next) => {
    try {
        const { id } = req.params
        const foundedProfile = await ProfileSchema.findById(id).populate("email", "email")
        
        if (!foundedProfile) {
            throw CustomErrorhandler.NotFound("Profile not found")
        }

        res.status(200).json(foundedProfile)
    } catch (error) {
        next(error)
    }
}

const addProfile = async (req, res, next) => {
    try {
        const { firstName, lastName, phoneNumber, email, imageUrl } = req.body

        await ProfileSchema.create({ 
            firstName, 
            lastName, 
            phoneNumber, 
            email, 
            imageUrl 
        })

        res.status(201).json({
            message: "Profile added"
        })
    } catch (error) {
        if (error.code === 11000) {
            return next(CustomErrorhandler.BadRequest("this profile already exist"))
        }
        next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params
        const { firstName, lastName, phoneNumber, imageUrl } = req.body

        const foundedProfile = await ProfileSchema.findByIdAndUpdate(
            id, 
            { firstName, lastName, phoneNumber, imageUrl },
            { new: true, runValidators: true } 
        )

        if (!foundedProfile) {
            throw CustomErrorhandler.NotFound("Profile not found")
        }

        res.status(200).json({
            message: "Profile updated"
        })
    } catch (error) {
        next(error)
    }
}

const deleteProfile = async (req, res, next) => {
    try {
        const { id } = req.params
        const foundedProfile = await ProfileSchema.findByIdAndDelete(id)

        if (!foundedProfile) {
            throw CustomErrorhandler.NotFound("Profile not found")
        }

        res.status(200).json({
            message: "Profile deleted"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllProfiles,
    getOneProfile,
    addProfile,
    updateProfile,
    deleteProfile
}