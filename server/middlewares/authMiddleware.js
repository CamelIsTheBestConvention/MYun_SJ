function authMiddleware(req, res, next) {
    if (req.session && req.session.userId) {
        next(); // 세션 정보가 유효하면 다음 미들웨어로 진행
    } else {
        res.status(401).send('Unauthorized'); // 로그인되지 않은 사용자에게 401 상태 코드 응답
    }
}

module.exports = authMiddleware;