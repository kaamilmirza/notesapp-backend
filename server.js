const express = require('express');             // Import expressjs
const mongoose = require('mongoose');           // Import mongoose
const cors = require('cors');                   // Import cors
const routes = require('./routes/routes');
require('dotenv').config();                     // Import dotenv
const port = process.env.PORT || 3000;
const app = express();                       // Create expressjs object
app.use(express.json());  
app.use(cors());

// Connect MongoDb
console.log(process.env.MONGOLAB_URI);
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('e don connect'))
.catch(err => console.log(err));

app.use(routes); // router file for all routes

app.route('/').get(cors(),(req, res) => res.json('Hello World!'));

// Added 0.0.0.0 to run server from local ip address
app.listen(port, '0.0.0.0', () => console.log(`Your server is running on port ${port}`));