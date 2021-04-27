const User = require('../db').User;

module.exports = {
  // 用户注册
  async register(ctx, next){
    let {user_name = '', user_pwd = '', user_id = ''} = ctx.request.body;
    try {
      if(user_name == '' || user_pwd == ""){
        ctx.body = {
          code: 401,
          msg: "注册失败，请填写完整表单!"
        }
        return;
      }
      if(user_pwd.length < 5){
        ctx.body = {
          code: 401,
          msg: '注册失败，密码最少为5位！'
        }
        return;
      }

      // 判断 user_name 是否重复
      let res = await User.find({user_name});
      if(res.length != 0){
        ctx.body = {
          code: 409,
          msg: '注册失败，登录账号重复了，换一个吧！'
        }
        return;
      }
      let user = new User({user_name,user_id,user_pwd});
      res = await user.save();
      if(res._id != null){
        ctx.body = {
          code: 200,
          msg: "注册成功!",
          data: {
            _id: res._id,
            user_name,
          }
        }
      }else{
        ctx.body = {
          code: 500,
          msg: "注册失败，服务器异常!"
        }
      }
    }catch (e){
      console.log(e);
      ctx.body = {
        code: 500,
        msg: "注册失败，服务器异常！"
      }
    }
  },
  // 用户登录
  async login(ctx, next){
    let {user_name = '', user_pwd = ''} = ctx.request.body;
    try {
      if(user_name == '' || user_pwd == ""){
        ctx.body = {
          code: 401,
          msg: "登录失败，请输入登录账号或密码!"
        }
        return;
      }
      if(user_pwd.length < 5){
        ctx.body = {
          code: 401,
          msg: '登录失败，密码最少为5位！'
        }
        return;
      }

      // 判断 user_name 是否重复
      let res = await User.find({user_name});
      if(res.length == 0){
        ctx.body = {
          code: 409,
          msg: '登录失败，登录账号不存在！'
        }
        return;
      }
      if(res[0].user_pwd != user_pwd){
        ctx.body = {
          code: 409,
          msg: '登录失败，登录密码错误！'
        }
        return;
      }
      if(res[0]._id != null){
        ctx.body = {
          code: 200,
          msg: "登录成功!",
          data: {
            _id: res[0]._id,
            user_name,
          }
        }
      }else{
        ctx.body = {
          code: 500,
          msg: "登录失败，服务器异常!"
        }
      }
    }catch (e){
      console.log(e);
      ctx.body = {
        code: 500,
        msg: "登录失败，服务器异常！"
      }
    }
  }
}