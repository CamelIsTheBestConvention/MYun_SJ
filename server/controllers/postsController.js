const Post = require('../models/post');

const postsController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                order: [['id', 'DESC']]
            });
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

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
            res.status(201).json(post);
        } catch (error) {
            console.error('글 작성 실패:', error);
            res.status(500).json({ message: '글 작성에 실패했습니다.' });
        }
    },

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
