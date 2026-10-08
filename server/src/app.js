import express from "express";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import requestRoutes from "./routes/requestRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/users", userRoutes);
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
  });
});

app.get("/", (request, response) => {
  response.json({ message: "SkillSwap API Running" });
});

export default app;
