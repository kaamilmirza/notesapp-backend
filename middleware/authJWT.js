require('dotenv').config();                     // Import dotenv
module.exports = class JWTauth {
    static async generateTokens(req,res,next){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date(),
            userId: req.body.user
        }
    }
}