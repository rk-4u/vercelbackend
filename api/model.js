const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, },
    Message: { type: String }
});


const User = mongoose.model('User', userSchema);

module.exports = User;