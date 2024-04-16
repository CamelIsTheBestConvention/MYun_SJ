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
    // 게시글 생성
    createPost: async (req, res) => {
        const { title, content, category, fileURL, userNickname } = req.body;
        try {
            const post = await Post.create({
                title,
                content,
                category,
                fileURL,
                userNickname
            });
            res.status(201).json(post);  // 전체 포스트 데이터를 JSON으로 반환
        } catch (error) {
            console.error('글 작성 실패:', error);
            res.status(500).json({ message: '글 작성에 실패했습니다.' });
        }
    },


    // 특정 게시글 조회
    getPostById: async (req, res) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
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
                res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
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
                res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = postsController;
