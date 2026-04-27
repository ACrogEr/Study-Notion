const mongoose = require("mongoose")

const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
})

<<<<<<< HEAD
module.exports = mongoose.model("courseProgress", courseProgress)
=======
module.exports = mongoose.model("courseProgress", courseProgress)
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
