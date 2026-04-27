const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	],
});

// Export the Tags model
<<<<<<< HEAD
module.exports = mongoose.model("Category", categorySchema);
=======
module.exports = mongoose.model("Category", categorySchema);
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
