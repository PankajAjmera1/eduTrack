import express from "express";
import { getAllCourses } from "../controllers/course.controller.js";
import { createCourse } from "../controllers/course.controller.js";


const router = express.Router();


router.route("/courses").get(getAllCourses);
router.route("/createcourse").post(createCourse);

export default router;
