const admin = require('firebase-admin');
const config = require("../config/config");
const axios = require('axios');
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(config.firebaseServiceAccount)});

const db = admin.firestore();

// Check if Firestore is initialized
if (db) {
console.log('Firebase Admin initialized successfully.');
// Perform additional operations using Firestore or other Firebase services
} else {
console.log('Firebase Admin initialization failed.');
}

//TO TEST AUTH TOKENS
//const uid = process.env.TEST_UID;
// admin
//   .auth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     const apiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.WEB_API_KEY}`;
//     const requestData = {
//       token: customToken,
//       returnSecureToken: true
//     };
//     return axios.post(apiUrl, requestData);
//   })
//   .then((response) => {
//     const idToken = response.data.idToken;
//     console.log('ID token:', idToken);
//   })
//   .catch((error) => {
//     console.error('Error obtaining ID token:', error);
//   });

module.exports = admin;

