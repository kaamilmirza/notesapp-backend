const admin = require("../services/firebase.service");

// Middleware function for token validation and server-side validation
function validateToken(req, res, next) {
  const idToken = req.headers.authorization;
  
  if (!idToken) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the ID token using the Firebase Admin SDK
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      next();
    })
    .catch((error) => {
      // Invalid token or verification failed
      return res.status(401).json({ message: 'Invalid token', error: error});
    });
}

module.exports = validateToken;
