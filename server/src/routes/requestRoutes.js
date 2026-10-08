import { Router } from "express";
import createRequest, {
  getIncomingRequests,
} from "../controllers/requestController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const requestRoutes = Router();

requestRoutes.get("/incoming", authMiddleware, getIncomingRequests);
requestRoutes.post("/", authMiddleware, createRequest);

export default requestRoutes;
