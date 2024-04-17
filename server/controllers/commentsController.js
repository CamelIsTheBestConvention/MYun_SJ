const Comment = require('../models/comment');

const commentsController = {
    createComment: async (req, res) => {
        const { postId } = req.params;
        const { content, userNickname } = req.body;
    
        if (!content || !userNickname) {
            return res.status(400).json({
                message: "댓글 내용과 사용자 별명은 필수입니다."
            });
        }
    
        try {
            const newComment = await Comment.create({
                postId,
                content,
                userNickname
            });
            res.status(201).json(newComment);
        } catch (error) {
            console.error('댓글 생성 실패:', error);
            res.status(500).json({
                message: '댓글 생성에 실패했습니다.',
                error: error.message
            });
        }
    },
    

    getCommentsByPostId: async (req, res) => {
        const { postId } = req.params;

        try {
            const comments = await Comment.findAll({
                where: { postId }
            });
            res.json(comments);
        } catch (error) {
            console.error('댓글 가져오기 실패:', error);
            res.status(500).json({ message: '댓글을 가져오는데 실패했습니다.' });
        }
    },

    updateComment: async (req, res) => {
    },

    deleteComment: async (req, res) => {
    }
};

module.exports = commentsController;
