import SkillRequest from "../models/SkillRequest.js";

const createRequest = async (request, response) => {
  try {
    const { receiver, offeredSkill, requestedSkill, message } = request.body;
    const skillRequest = new SkillRequest({
      sender: request.user.userId,
      receiver,
      offeredSkill,
      requestedSkill,
      message,
    });

    await skillRequest.save();

    return response.status(201).json({ request: skillRequest });
  } catch (error) {
    console.error("Creating skill request failed:", error);
    return response.status(500).json({ message: "Failed to create skill request" });
  }
};

export const getIncomingRequests = async (request, response) => {
  try {
    const requests = await SkillRequest.find({ receiver: request.user.userId })
      .populate("sender", "name bio location skillsOffered skillsWanted");

    return response.status(200).json({ requests });
  } catch (error) {
    console.error("Fetching incoming requests failed:", error);
    return response.status(500).json({ message: "Failed to fetch incoming requests" });
  }
};

export default createRequest;
