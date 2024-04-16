const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0] === "Bearer") {
      const token = parts[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ message: "유효하지 않은 토큰입니다." });
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json({ message: "토큰이 Bearer 타입이 아닙니다." });
    }
  } else {
    res.status(401).json({ message: "토큰이 제공되지 않았습니다." });
  }
};
