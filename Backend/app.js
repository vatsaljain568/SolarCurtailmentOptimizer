require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { main } = require('./hash');



const corsOptions = {
    origin: 'https://solarcurtailmentoptimizer.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const slashRoutes = require('./route/slash.routes')
app.use('/', slashRoutes)

const connectDB = require('./config/mongoose.config');
connectDB();

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
