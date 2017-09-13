const jwt =require("jsonwebtoken");
const key ="72727272";

function signToken(payload, cb){
    jwt.sign(payload, key ,cb);
}

module.exports ={
    signToken: signToken
}