const jwt = require('jsonwebtoken');

const config = require('../config/config');

const authenticateMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
    
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userData = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
}

module.exports = authenticateMiddleware;

