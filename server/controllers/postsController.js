const Post = require('../models/post');

const postsController = {
    // 모든 게시글 조회
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // 게시글 생성
    createPost: async (req, res) => {
        try {
            const post = await Post.create(req.body);
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // 특정 게시글 조회
    getPostById: async (req, res) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // 게시글 업데이트
    updatePost: async (req, res) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (post) {
                await post.update(req.body);
                res.json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // 게시글 삭제
    deletePost: async (req, res) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (post) {
                await post.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = postsController;
