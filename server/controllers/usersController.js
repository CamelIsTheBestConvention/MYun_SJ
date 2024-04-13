const User = require('../models/user');

const usersController = {
    // 모든 사용자 조회
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // 사용자 생성
    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // 특정 사용자 조회
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

    // 사용자 업데이트
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

    // 사용자 삭제
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // 사용자 로그인
    loginUser: async (req, res) => {
        const { email, pw } = req.body;
        try {
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
            }

            // 비밀번호 검증 로직 추가 일치 여부만 확인
            if (user.pw !== pw) {
                return res.status(400).json({ message: '잘못된 비밀번호입니다.' });
            }

            // 세션에 사용자 ID 저장
            req.session.userId = user.id;
            res.json({ message: '로그인 성공!' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // 사용자 로그아웃
    logoutUser: async (req, res) => {
        try {
            req.session.destroy((err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: '로그아웃 에러' });
                } else {
                    res.json({ message: '로그아웃 성공' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = usersController;