import User from '../models/userModel.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, gender } = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password doesn't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //hash passwords
        //https://avatar.iran.liara.run/public

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilePic:newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup controller")
        res.status(500).json({error:"Internal server error"});
    }
}

export const login = async (req, res) => {
    res.send('Signup Route');
}

export const logout = async (req, res) => {
    res.send('Logout Route');
}