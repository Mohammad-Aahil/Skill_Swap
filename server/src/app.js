import express from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (request, response) => {
  response.json({ message: "SkillSwap API Running" });
});

export default app;
