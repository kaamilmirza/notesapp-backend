require('dotenv').config();                     // Import dotenv
const jwt = require('jsonwebtoken');
module.exports = class JWTauth {
    static async generateTokens(req,res,next){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date(),
            userId: req.body.user
        }
        const token = jwt.sign(data,jwtSecretKey);
        res.send(token);
    }
    static async validateToken(req,res,next){
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        
        try{
            const token = req.header(tokenHeaderKey);

            const verified = jwt.verify(token,jwtSecretKey);
            if(verified){
                return res.send("Verified");
            }
            else{
                return res.status(401).send(error);
            }
        }
        catch(error){
            return res.status(401).send(error);
        }
    };
    
}