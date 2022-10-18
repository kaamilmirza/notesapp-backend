require('dotenv').config();
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const API_Key = process.env.G_API_KEY;
