import express from "express";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
  });
});

app.get("/", (request, response) => {
  response.json({ message: "SkillSwap API Running" });
});

export default app;
