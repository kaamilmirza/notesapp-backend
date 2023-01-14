require("dotenv").config(); // Import dotenv
const jwt = require("jsonwebtoken");
module.exports = class JWTauth {
  static async authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(401);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }
};
