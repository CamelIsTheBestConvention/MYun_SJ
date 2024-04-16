const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // "Bearer TOKEN"에서 토큰 부분만 추출
  if (!token) {
    return res.status(401).json({ message: "토큰이 제공되지 않았습니다." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "유효하지 않은 토큰입니다." });
    }
    req.user = decoded;  // 디코드된 사용자 정보를 req.user에 저장
    next();
  });
};
