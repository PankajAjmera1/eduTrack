import { Course } from "../models/course.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllCourses = asyncHandler(async (req, res, next) => {
    const keyword = req.query.keyword || "";
    const category = req.query.category || "";
  
    const courses = await Course.find({
      title: {
        $regex: keyword,
        $options: "i",
      },
      category: {
        $regex: category,
        $options: "i",
      },
    }).select("-lectures");
    res.status(200).json({
      success: true,
      courses,
    });
  });


  export const createCourse = asyncHandler(async(req,res,next)=>{
  const {title,description,category,createdBy} = req.body;
  if (!title || !description || !category || !createdBy)
  throw new ApiError(400, "Please fill in all fields");

  //const file =req.file;
  await Course.create({
    title,
    description,
    poster:{
      public_id:"temp",
      url:"temp"
    },
    category,
    createdBy
  });

    res.status(201).json({
        success:true,
        message:"Course created successfully"
    });


  })