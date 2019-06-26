const mongoose = require('../connection');
var userSchema = mongoose.Schema({
    userid: {type:String, require:true},
    password: {type:String, require:true}
});

module.exports = mongoose.model('users', userSchema);