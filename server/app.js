const express = require('express');
const session = require('express-session');
const sequelize = require('./config/db');
const User = require('./models/user');
const Post = require('./models/post');
const authMiddleware = require('./middlewares/authMiddleware');
const fs = require('fs');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 5000;
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

require('dotenv').config();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

// CORS 미들웨어 설정 (옵션)
const cors = require('cors');
app.use(cors());

// 라우트 사용, authMiddleware를 특정 경로에 적용
app.use('/api/posts', authMiddleware, postsRoutes); // posts 경로에 authMiddleware 적용
app.use('/api/users', usersRoutes); // users 경로에는 authMiddleware를 적용하지 않음

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

sequelize.sync()
    .then(() => console.log('Tables created...'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('Hello World!'));

// HTTPS 서버 설정
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});
