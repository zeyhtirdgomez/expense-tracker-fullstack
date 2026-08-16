const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization)
        return res.status(401).json({message : 'No authorization token'});

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const text = req.headers.authorization;
    const parts = text.split(' ');
    const token = parts[0] === 'Bearer'? parts[1] : null;

    if (!token)
        return res.status(401).json({message : 'Invalid authorization header.'});

    try {
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message : 'Unauthorized'});
    }
};

module.exports = authMiddleware;