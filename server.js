const express = require('express');
const router = express.Router();
const routes = require("./routes/routes");
const dotenv = require('dotenv');
require("./services/mongo.service");
dotenv.config();


const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
