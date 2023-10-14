const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoute');

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

//database config
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send({
        message: 'Welcom to ecommerce website'
    });
});

app.listen(PORT, () => {
    console.log(`Server is Up and running on port ${PORT}`.bgMagenta.white);
});