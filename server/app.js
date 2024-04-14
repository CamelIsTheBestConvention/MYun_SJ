const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const sequelize = require('./config/db');

const User = require('./models/user');
const Post = require('./models/post');

const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

const authMiddleware = require('./middlewares/authMiddleware');

app.use(cors());

app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);


app.use('/api/users', authMiddleware, usersRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.authenticate().then(() => {
        console.log('Database connected...');
        sequelize.sync().then(() => {
            console.log('Tables created...');
        }).catch(err => console.log('Error: ' + err));
    }).catch(err => console.log('Error: ' + err));
});
