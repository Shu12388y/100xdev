import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: { type: String },
  desc: { type: String },
});

export const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
