
const router = require('koa-router')();
const controller = require('../controller')

router.get('/', async (ctx, next) => {
    ctx.body = "hello world!"
  })
  .post("/api/user", controller.user.register)  //　用户注册
  .post("/api/login", controller.user.login)  //　用户登录
  .get("/api/getLeaves", controller.msg.getLeaves)  //　获取留言列表
  .post("/api/Leaves", controller.msg.Leaves)  //　留言
  .post("/api/deleteLeaver", controller.msg.deleteLeaver)  //　留言

  
   
  module.exports = router