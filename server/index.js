const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // JSON 요청 본문을 파싱하기 위해 미들웨어 사용

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 예시: 사용자 정보를 관리하는 API

// 사용자 목록을 저장할 배열
const users = [];

// 모든 사용자 조회 (GET)
app.get('/api/users', (req, res) => {
  res.send(users);
});

// 특정 사용자 조회 (GET)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found.');
  res.send(user);
});

// 사용자 생성 (POST)
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

// 사용자 정보 업데이트 (PUT)
app.put('/api/users/:id', (req, res) => {
  // 사용자 찾기, 없으면 404 응답
  // 사용자 정보 업데이트
  // 업데이트된 사용자 정보 응답
});

// 사용자 삭제 (DELETE)
app.delete('/api/users/:id', (req, res) => {
  // 사용자 찾기, 없으면 404 응답
  // 사용자 목록에서 삭제
  // 삭제된 사용자 정보 응답
});
