import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    bio: String,
    location: String,
    skillsOffered: [String],
    skillsWanted: [String],
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
