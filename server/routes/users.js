const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

// JWT 검증이 필요한 GET 요청
router.get('/', authMiddleware, usersController.getAllUsers);

// 회원가입은 JWT 검증 없음
router.post('/', usersController.createUser);

// 사용자 정보 조회, JWT 검증 필요
router.get('/:id', authMiddleware, usersController.getUserById);

// 사용자 정보 업데이트, JWT 검증 필요
router.put('/:id', authMiddleware, usersController.updateUser);

// 사용자 삭제, JWT 검증 필요
router.delete('/:id', authMiddleware, usersController.deleteUser);

// 로그인, JWT 검증 없음
router.post('/login', usersController.loginUser);

module.exports = router;
