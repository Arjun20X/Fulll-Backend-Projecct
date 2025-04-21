import mongoose, {Scehma, Schema} from "mongoose";

// It’s a Mongoose plugin that adds a method to you
// model to allow pagination on aggregation queries.
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

/*Imagine you have thousands of video documents, and you're running a complex aggregation (e.g., getting videos by category, likes, views, etc.) — but you only want 10 results per page.
Without pagination:
You'd load everything — which is slow and memory-heavy. 🐢
videoSchema.plugin(mongooseAggregatePaginate)*/

export const Video  = mongoose.model("Video", videoSchema);