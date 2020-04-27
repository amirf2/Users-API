const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nickname:{type: String, minlength: 1,maxlength: 11},  
    username:{type: String, minlength: 1, maxlength: 50},
    password: String,
    status:{ type: Number, min: 0, max: 255},
    created_at:{ type: String},
    __v: {type: Number, select: false}
});

module.exports = mongoose.model("User",userSchema);