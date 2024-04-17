const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const commentsController = require('../controllers/commentsController.js');

// 모든 게시글을 가져오는 GET 요청
router.get('/', postsController.getAllPosts);

// 새로운 게시글을 생성하는 POST 요청
router.post('/', postsController.createPost);

// 특정 게시글을 가져오는 GET 요청
router.get('/:id', postsController.getPostById);

// 특정 게시글을 업데이트하는 PUT 요청
router.put('/:id', postsController.updatePost);

// 특정 게시글을 삭제하는 DELETE 요청
router.delete('/:id', postsController.deletePost);

// 댓글 생성
router.post('/:postId/comments', commentsController.createComment);

// 게시물의 모든 댓글 가져오기
router.get('/:postId/comments', commentsController.getCommentsByPostId);

// 특정 댓글 수정
router.put('/:postId/comments/:commentId', commentsController.updateComment);

// 특정 댓글 삭제
router.delete('/:postId/comments/:commentId', commentsController.deleteComment);

module.exports = router;
