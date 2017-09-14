const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const signToken = require("./utils/jwt.js").signToken;
const verifyToken = require("./utils/jwt.js").verifyToken;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req,res,next){
    console.log(new Date());
    next();
})

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});


app.post('/login', function(req, res){
    console.log(req.body);
    
    if(req.body.username === "abc" && req.body.password == "abc"){
        signToken({username:"abc"},function(err, token){
            res.json({
                login: true,
                token: token
            });

        })

    }else{
        res.json({
            login: false
        });
    }
});
app.get('/isLogin', function(req ,res){
    let auth = req.header("Authorization");
    if(auth !== undefined){
        let arr = auth.split(" ");
        if(arr[0]==="Bearer"){
            let token = arr[1];
            verifyToken(token ,function(err, decoded){
                if(err){
                    res.json({
                        login:false
                    });
                }
                else{
                    res.json({
                        login:true,
                        username: decoded.username
                    });
                }
            })
        }
        else{
            res.json({
                login: false
            });
        }
    }else{
        res.json({
            login: false
        });
    }
})

app.listen(3000,function(){
    console.log("server start!!!!!!!!!!!")});