const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controllers/ContactUs")

router.post("/contact", contactUsController)

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
