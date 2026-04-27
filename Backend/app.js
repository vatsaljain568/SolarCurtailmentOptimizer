require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors')
const { main } = require('./hash');
require('dotenv').config();
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOption))

const slashRoutes = require('./route/slash.routes')

app.use('/' ,slashRoutes)

const connectDB = require('./config/mongoose.config');

connectDB() // Call it!




app.listen(8080);

