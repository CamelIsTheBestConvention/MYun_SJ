const express = require('express');
const session = require('express-session');
const sequelize = require('./config/db');
const User = require('./models/user');
const Post = require('./models/post');

const app = express();
const PORT = process.env.PORT || 5000;


const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

require('dotenv').config();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 사용
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);
app.use(session({
    secret: process.env.SESSION_KEY, // .env 파일에서 SESSION_KEY 환경 변수 사용
    resave: false, // 세션을 항상 저장할 지 정하는 값 (변경되지 않으면 저장 X)
    saveUninitialized: true, // 세션이 저장되기 전에 uninitialized 상태로 만들어 저장
    cookie: { secure: 'auto' } // 개발 환경에서는 false, HTTPS 환경에서는 true로 설정
  }));

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

sequelize.sync()
    .then(() => console.log('Tables created...'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));