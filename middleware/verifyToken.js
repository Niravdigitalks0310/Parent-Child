const jwt = require("jsonwebtoken");
const Staff = require("../modals/user.modal");

module.exports = async (req, res, next) => {
  try {
    
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({
        status: "failed",
        message: "Access denied. No token provided.",
      });
    }

    // Extract the token from the Authorization header (remove "Bearer " prefix)
    const token = authHeader;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded
      // const user = await Staff.findById(decoded.userId).populate("role");
      const user = await Staff.findById(decoded.userId);

      if (!user) throw new Error("Staff not found");

      req.user = user;
      next();
    } catch (jwtError) {
      console.error("JWT verification error:", jwtError.message);
      if (jwtError.name === "TokenExpiredError") {
        return res.status(401).json({
          status: "failed",
          message: "Token has expired. Please log in again.",
        });
      }
      throw jwtError;
    }
  } catch (error) {
    console.error("Auth error:", error.message);
    res.status(401).json({
      status: "failed",
      message: error.message || "Unauthorized",
    });
  }
};
