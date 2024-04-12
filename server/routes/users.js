const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// 모든 사용자를 가져오는 GET 요청
router.get('/', usersController.getAllUsers);

// 새로운 사용자를 등록하는 POST 요청
router.post('/', usersController.createUser);

// 특정 사용자 정보를 가져오는 GET 요청
router.get('/:id', usersController.getUserById);

// 특정 사용자 정보를 업데이트하는 PUT 요청
router.put('/:id', usersController.updateUser);

// 특정 사용자를 삭제하는 DELETE 요청
router.delete('/:id', usersController.deleteUser);

// 사용자 로그인을 처리하는 POST 요청
router.post('/login', usersController.loginUser);

// 사용자 로그아웃을 처리하는 POST 요청
router.post('/logout', usersController.logoutUser);

module.exports = router;