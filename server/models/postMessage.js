import mongoose from "mongoose";

//creating schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  createdBy: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//creating models
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage; //exportiing model
