const mongoose = require("mongoose");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SubSection",
		},
	],
});

// Export the Section model
<<<<<<< HEAD
module.exports = mongoose.model("Section", sectionSchema);
=======
module.exports = mongoose.model("Section", sectionSchema);
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
