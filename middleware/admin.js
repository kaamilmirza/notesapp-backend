const User = require("../models/user.model");

const adminMiddleware = (req, res, next) => {
    const uid = req.uid; // Assuming the verified UID is stored in req.uid
  
    // Make a request to the MongoDB collection to retrieve the user's role
    User.findOne({ uid })
    .lean()
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
  
        // Check if the user is an admin based on the role
        if (user.role !== 'admin') {
          return res.status(403).json({ message: 'Access denied. User is not an admin' });
        }
  
        // User is an admin, proceed to the next middleware or route handler
        next();
      })
      .catch((error) => {
        console.error('Error checking admin status:', error);
        return res.status(500).json({ message: 'Internal server error' });
      });
  };

module.exports = adminMiddleware;
  