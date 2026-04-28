require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors')
const { main } = require('./hash');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const allwoedOrigin = ['https://solarcurtailmentoptimizer.vercel.app',  
    'http://localhost:5173',                           
    'http://localhost:3000'  ]

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (Postman, mobile apps)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(cookieParser());

app.use(express.urlencoded({extended: true}));
app.use(express.json());



const slashRoutes = require('./route/slash.routes')

app.use('/' ,slashRoutes)

const connectDB = require('./config/mongoose.config');

connectDB() // Call it!




app.listen(8080);

