const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser)
            return res.status(400).json({message : "Email already registered."});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email
        });

    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res,next) => {
    try {
        
        const {email, password} = req.body;
        const user = await User.findOne({email});       

        if (!user)
            return res.status(400).json({message : 'No user found.'});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch)
            return res.status(400).json({message : 'Incorrect password.'});

        // Payload
        const payload = {
            id : user._id
        };

        // Secret Key
        const secretKey = process.env.JWT_SECRET_KEY;

        // Options
        const options = {
            expiresIn: '7h',
        }
        const token = jwt.sign(payload, secretKey, options);

        return res.status(200).json({token});

    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerUser,
    loginUser,
}