import User from "../models/User.js";

const updateProfile = async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const { bio, location, skillsOffered, skillsWanted } = request.body ?? {};

    if (bio !== undefined) user.bio = bio;
    if (location !== undefined) user.location = location;
    if (skillsOffered !== undefined) user.skillsOffered = skillsOffered;
    if (skillsWanted !== undefined) user.skillsWanted = skillsWanted;

    await user.save();

    const updatedUser = user.toObject();
    delete updatedUser.password;

    return response.status(200).json({ user: updatedUser });
  } catch (error) {
    console.error("Profile update failed:", error);
    return response.status(500).json({ message: "Failed to update profile" });
  }
};

export default updateProfile;
