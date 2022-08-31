require('dotenv').config()
const secret = process.env.JWT_TOKEN

const jwt = require('jsonwebtoken')
const User = require('../routes/models/user')

const WithAuth = (req,res,next)=>{
    const token = req.headers['x-acess-token']
    if(!token){
        res.status(401).json({error:'Unauthorized no token provided'})
    }else{
        jwt.verify(token,secret,function(erro, decode){
            if(erro){
                res.status(401).json({error:'Unauthorized: token invalid'})
            }else{
                req.email = decode.email
                User.findOne({email: decode.email})
                .then(user=>{
                    req.user = user
                    next()
                }).catch(erro =>{
                    res.status(401).json({error:erro})
                })
            }
        })
    }
}


module.exports = WithAuth