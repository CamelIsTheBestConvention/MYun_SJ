const User = require('../models/user');
const jwt = require('jsonwebtoken');

const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const { email, name, nickname, pw } = req.body;
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({ message: '이미 존재하는 이메일 주소입니다.' });
            }

            const user = await User.create({ email, name, nickname, pw });
            // JWT 토큰 생성
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET, // 여기서 비밀키 사용
                { expiresIn: '1h' }
            );
            res.status(201).json({ message: '회원가입 성공!', user, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.update(req.body);
                res.json(user);
            } else {
                res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.sendStatus(204);
            } else {
                res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    loginUser: async (req, res) => {
        const { email, pw } = req.body;
        try {
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }
            if (user.pw !== pw) {
                return res.status(400).json({ message: '잘못된 비밀번호입니다.' });
            }
            // JWT 토큰 생성
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.json({ message: '로그인 성공!', token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getLoggedInUser: (req, res) => {
        res.json({ user: req.user });
    }
};

module.exports = usersController;
