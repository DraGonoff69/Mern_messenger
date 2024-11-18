import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,req) => {
    const token=jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });
    resizeBy.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,  //MS
        httpOnly:true, //prevent XSS attacks (cross site scripting attacks)
        sameSite:"strict",  //CSRF attacks (cross site request forgery attacks)
        secure:process.env.NODE_ENV !=="devlopment" //cookie will only be sent in https
    })
    
}

export default generateTokenAndSetCookie;  
