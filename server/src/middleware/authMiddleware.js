import jwt from "jsonwebtoken";

const authMiddleware = (request, response, next) => {
  const authorizationHeader = request.get("Authorization");
  const token = authorizationHeader?.startsWith("Bearer ")
    ? authorizationHeader.slice(7).trim()
    : "";

  if (!token) {
    return response.status(401).json({ message: "Authentication token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (typeof decoded !== "object" || !decoded.userId) {
      return response.status(401).json({ message: "Invalid or expired token" });
    }

    request.user = { userId: decoded.userId };
    return next();
  } catch {
    return response.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
