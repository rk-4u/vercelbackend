const User = require("./model");

// Create a new user
const register=  async (req, res) => {
    try {
        const { FirstName, LastName, phone, email, Message } = req.body;
        const newUser = new User({ FirstName, LastName, phone, email, Message });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err.message);
        res.status(400).json({ error: err.message });
    }
};

// Get all users
const getuser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {register, getuser};