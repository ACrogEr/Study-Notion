// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")

<<<<<<< HEAD
// Tags Controllers Import
=======
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0

// Categories Controllers Import
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
<<<<<<< HEAD
  getAllRatingReview,
} = require("../controllers/RatingandReview")
const {
  updateCourseProgress,
} = require("../controllers/courseProgress")
// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/auth")
=======
  getAllRating,
} = require("../controllers/RatingAndReview")

const {
  updateCourseProgress
} = require("../controllers/courseProgress");

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)
<<<<<<< HEAD
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse)
=======
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)
<<<<<<< HEAD
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
=======
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails)
<<<<<<< HEAD
// To Update Course Progress
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)

=======
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse)
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
<<<<<<< HEAD
router.get("/showAllCategories" , showAllCategories)
=======
router.get("/showAllCategories", showAllCategories)
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
router.post("/getCategoryPageDetails", categoryPageDetails)

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
<<<<<<< HEAD
router.get("/getReviews", getAllRatingReview)

module.exports = router
=======
router.get("/getReviews", getAllRating)

module.exports = router
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
