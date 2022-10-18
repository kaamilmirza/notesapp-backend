const express = require('express');             // Import expressjs
const mongoose = require('mongoose');           // Import mongoose
const cors = require('cors');                   // Import cors
const files = require('./routes/files');
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
// // Check connection is established
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDb connected');
// });
// middleware
// app.use('/uploads', express.static('uploads'));   // Make uploads folder to make it accessible from browser

app.use('/',files); // For Json Data
// User Route
// const userRoute = require('./routes/user');
// app.use('/add', userRoute);
// Profile Route
// const profileRoute = require('./routes/profile');
// app.use('/profile', profileRoute);
// // Blog Route
// const blogRoute = require('./routes/blogpost');
// app.use('/blogPost', blogRoute);

app.route('/').get(cors(),(req, res) => res.json('Hello World!'));

// app.listen(port, () => console.log(`Your server is running on port ${port}`));

// Added 0.0.0.0 to run server from local ip address
app.listen(port, '0.0.0.0', () => console.log(`Your server is running on port ${port}`));