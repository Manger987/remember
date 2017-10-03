var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    lastname: String,
    email: String,
    dateBirth: Date,
});

module.exports = mongoose.model('User', UserSchema);
