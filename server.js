const express = require('express');
const router = express.Router();
const routes = require("./routes/routes");
const dotenv = require('dotenv');
require("./services/firebase.service");
require("./services/mongo.service");
dotenv.config();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
