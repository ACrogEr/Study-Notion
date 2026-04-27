const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");
const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
<<<<<<< HEAD

=======
	// Create a transporter to send emails

	// Define the email options 
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0

	// Send the email
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
<<<<<<< HEAD
			emailTemplate(otp)
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
=======
			`${emailTemplate(otp)}` 
		); 
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error; 
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
	}
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
<<<<<<< HEAD
		await sendVerificationEmail(this.email, this.otp);
=======
		await sendVerificationEmail(this.email, this.otp); 
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
	}
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);

<<<<<<< HEAD
module.exports = OTP;
=======
module.exports = OTP;
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
