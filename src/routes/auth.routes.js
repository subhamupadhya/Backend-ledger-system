const express = require("express")
const authController = require("../controller/auth.controller")

const router = express.Router()

/* POST / api/auth/register  */
router.post("/register", authController.userRegisterController)

/* POST
module.exports = router