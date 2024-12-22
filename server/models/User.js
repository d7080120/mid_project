const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type:String,
    },
    address:String,
    phone:String
}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)