import { Router } from "express";
import updateProfile from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const userRoutes = Router();

userRoutes.put("/profile", authMiddleware, updateProfile);

export default userRoutes;
