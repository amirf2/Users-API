const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nickname:{type: String, minlength: 1,maxlength: 11, required: true},  
    username:{type: String, minlength: 1, maxlength: 50, unique: true , required: true },
    password: {type: String, requried: true},
    status:{ type: Number, min: 0, max: 255, required: true},
    created_at:{ type: String},
    __v: {type: Number, select: false}
});

module.exports = mongoose.model("User",userSchema);