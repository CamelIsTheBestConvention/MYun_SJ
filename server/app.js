const cors = require('cors');
const express = require('express');
const app = express();
require('dotenv').config();

const jwt = require('jsonwebtoken');

const sequelize = require('./config/db');

const User = require('./models/user');
const Post = require('./models/post');

const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

const authMiddleware = require('./middlewares/authMiddleware');

// CORS 정책 설정: 특정 도메인에서만 요청을 허용
const corsOptions = {
    origin: 'http://localhost:3333', // 클라이언트 서버 주소
    credentials: true, // 크로스-도메인 쿠키 전송 허용
    optionsSuccessStatus: 200 // 일부 레거시 브라우저(IE11, various SmartTVs) 호환성 보장
};

app.use(cors(corsOptions));


app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JWT 인증이 필요하지 않은 사용자 관련 경로 먼저 등록
app.use('/api/users', usersRoutes);

// 나머지 API 경로에 대해 JWT 인증 미들웨어 적용
app.use('/api', authMiddleware);

// 인증이 필요한 게시물 관련 경로
app.use('/api/posts', postsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my MYun API');
});

const PORT = process.env.PORT || 49152;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.authenticate().then(() => {
        console.log('Database connected...');
        sequelize.sync().then(() => {
            console.log('Tables created...');
        }).catch(err => console.log('Error: ' + err));
    }).catch(err => console.log('Error: ' + err));
});

