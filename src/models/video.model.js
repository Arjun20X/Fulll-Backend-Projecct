import mongoose, {Scehma, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary url
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // from cloudinary
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default : true,
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User", 
    }
  },
  { timestamps: true }
);


// this is a plugin
// A plugin is a piece of code which adds a feature on top of a method or function
videoSchema.plugin(mongooseAggregatePaginate)


export const Video  = mongoose.model("Video", videoSchema);