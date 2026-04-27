const Razorpay = require("razorpay");
<<<<<<< HEAD

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});
=======
require("dotenv").config() 


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
