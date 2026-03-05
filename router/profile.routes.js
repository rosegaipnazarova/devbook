const { Router } = require("express")
const profileValidatorMiddleware = require("../middleware/profile.validator.middleware")
const authorization = require("../middleware/authorization")
const { getAllProfiles, getOneProfile, addProfile, updateProfile, deleteProfile } = require("../controller/profile.controller")

const profileRouter = Router()

profileRouter.get("/get_all_profiles", getAllProfiles)
profileRouter.get("/get_one_profile/:id", getOneProfile)
profileRouter.post("/add_profile",profileValidatorMiddleware, authorization,addProfile)
profileRouter.put("/update_profile/:id", authorization, updateProfile)
profileRouter.delete("/delete_profile/:id", authorization, deleteProfile)


module.exports = profileRouter