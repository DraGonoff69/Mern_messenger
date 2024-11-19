import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    // Generate a JWT token
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "15d", // Token expiration time
    });

    // Set the JWT token as a cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevent XSS attacks
        sameSite: "strict", // Prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development", // Only send cookie over HTTPS in non-development environments
    });
};

export default generateTokenAndSetCookie;
