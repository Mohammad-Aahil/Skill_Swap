import { Router } from "express";
import updateProfile, { searchUsersBySkill } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const userRoutes = Router();

userRoutes.get("/search", authMiddleware, searchUsersBySkill);
userRoutes.put("/profile", authMiddleware, updateProfile);

export default userRoutes;
