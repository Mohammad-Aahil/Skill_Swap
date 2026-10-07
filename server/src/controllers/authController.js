import bcrypt from "bcryptjs";
import User from "../models/User.js";

const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    // Hash passwords so stored credentials cannot be used as plain text.
    const hashedPassword = await bcrypt.hash(password, 10);
    // Never store a password directly; a database leak could expose user accounts.
    const user = new User({ name, email, password: hashedPassword });

    await user.save();

    response.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("User registration failed:", error);
    response.status(500).json({ message: "User registration failed" });
  }
};

export default registerUser;
