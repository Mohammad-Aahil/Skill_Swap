import { Router } from "express";
import registerUser, {
  getCurrentUser,
  loginUser,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const authRoutes = Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/me", authMiddleware, getCurrentUser);

export default authRoutes;
