const express = require('express');
const { resolve } = require('path');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./src/db/db.js');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

connectDB()
    .then(() => {
        app.listen(3010, () => {
            console.log("Server is running at port", 3010);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });

const menuRoutes = require('./src/routes/menuRoutes.js');
app.use('/api', menuRoutes);