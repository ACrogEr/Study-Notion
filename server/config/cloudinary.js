const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
<<<<<<< HEAD

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			// Configuring the Cloudinary to Upload MEDIA 
=======
require("dotenv").config() 

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({ 
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
<<<<<<< HEAD
	} catch (error) {
		console.log(error);
	}
};
=======
		console.log("Cloudinary Connected ")
	} catch (error) {
		console.log("Clodinary not Connected")
		console.log(error);
	} 
}; 
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
