import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`SkillSwap API listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start SkillSwap API:", error);
    process.exit(1);
  }
};

await startServer();
