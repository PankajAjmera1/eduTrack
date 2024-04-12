import mongoose,{Schema} from "mongoose";

const courseSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:[100,"Course title can't be more than 100 characters"]
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:[500,"Course description can't be more than 500 characters"]
    },
    weeks:{
        type:String,
        required:true,
    },
    continent:{
        type:String,
        required:true,
    },
    sales:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:true
    },

},{timestamps:true})