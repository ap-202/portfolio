//import Express and CORS
const express = require('express');
const cors = require('cors');           //enables bypass of security access requirements for server
const mongoose = require('mongoose');   //moongoose allows connection to mongodb 

//enables environment variables in dotenv
require('dotenv').config();

const app = express();                  //runs express server
const port = process.env.PORT || 3000   //server port --> defaults to 3000 if process.env.PORT is false

app.use(cors());                        //allows use of cors
app.use(express.json());                //allows parsing of jsons

const URI = process.env.ATL_URI;        //ATLAS URI
mongoose.connect(URI);    
const connection = mongoose.connection;

// when event = 'open', print
connection.once('open', () => {
    console.log("Connected to MongoDB database.");
});

const sessionsRoute = require('../backend/routes/projects.js');
app.use('/projects', sessionsRoute);

//starts listening for server requests on port = 3000
app.listen(port, () => {
    console.log('Server is running on port: ' + port + '.');
});
