const express = require('express');
const sequelize = require('./config/db');
const User = require('./models/user');
const Post = require('./models/post');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

sequelize.sync()
    .then(() => console.log('Tables created...'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
