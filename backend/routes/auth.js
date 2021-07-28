const router =require("express").Router();
const User = require("../models/users")
const CryptoJS =require("crypto-js")
const jwt = require("jsonwebtoken")
//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypte(req.body.password,process.env.SECRET_Key).toString(),
        });
        try{
            
            const  user = await newUser.save(); 
            res.status(201).json(user);
        }catch (err) {
            res.status(500).json(err);
        }
})
//login
router.post("/login",async (req,res)=>{
    try{
        const user = User.findOne({email:req.body.email})
        !user && res.Status(404).json("wrong password or usenrname :(")

        const bytes = CryptoJs.AES.decrypt(user.password,process.env.SECRET_Key)
        const originalPass = bytes.toString(CryptoJS.enc.Utf8)
    
        originalPass !== req.body.password &&
        res.status(404).json("wrong password or usenrname :(")
        
        const accessToken = jwt.sign({id:user_id,isAdmin:user.isAdmin},
            process.env.SECRET_Key,{expiresIn:"5d"}
            )
        
        const {password, ...info} = user._doc
        
        res.status(201).json({...info,accessToken})
        
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router