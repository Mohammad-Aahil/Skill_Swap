import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return response.status(400).json({ message: "Email already registered" });
    }

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
    if (error.code === 11000) {
      return response.status(400).json({ message: "Email already registered" });
    }

    console.error("User registration failed:", error);
    response.status(500).json({ message: "User registration failed" });
  }
};

export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return response.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("User login failed:", error);
    return response.status(500).json({ message: "User login failed" });
  }
};

export default registerUser;
