const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
first : {type: String} ,

last :  {type: String},

email : { type: String},

phone : { type : Number},

note : { type : String },

})

const UserModle = mongoose.model('userData' , UserSchema);
module.exports = UserModle