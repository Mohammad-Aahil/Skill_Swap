import mongoose from "mongoose";

const skillRequestSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    offeredSkill: { type: String, required: true },
    requestedSkill: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);

const SkillRequest = mongoose.model("SkillRequest", skillRequestSchema);

export default SkillRequest;
