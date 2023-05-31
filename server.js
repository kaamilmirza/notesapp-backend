const express = require('express');
const router = express.Router();
const routes = require("./routes/routes");
const dotenv = require('dotenv');
require("./services/firebase.service");
require("./services/mongo.service");
require("./services/socket.service");
require("./services/trending-cron");
dotenv.config();
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
