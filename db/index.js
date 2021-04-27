const mongoose = require('mongoose');

const db = mongoose.connect("mongodb://localhost/test")
const Schema = mongoose.Schema; 

// 账户的数据库模型
let userSchema = new Schema({
    user_name:String,
    user_id: String,
    user_pwd:String
});


// 留言的数据库模型
let commentSchema = new Schema({
    user_id: {
        type:String,
        ref:'User'
    },
    content: String,
    create_time: {
        type: String,
        default: Date.now
    }
})

exports.User = mongoose.model('User', userSchema); 
exports.Comment = mongoose.model('Comment', commentSchema); 