<template>
  <div class="loginWrap">
      <div class="loginBox">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="name">
                <el-input type="text" prefix-icon="el-icon-user" placeholder="账号" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" prefix-icon="el-icon-lock" placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {

  },
  data(){
      return {
        ruleForm:{
            pass:'',
            name:''
        },
        rules: {
            pass: [
                { 
                    required: true,
                    message:'密码不能为空',
                    trigger: 'blur' 
                }
            ],
            name: [
                { 
                    required: true,
                    message:'用户名不能为空',
                    trigger: 'blur' 
                }
            ]
        }
      }
  },
  created(){
    
  },
  methods:{
      submitForm(){

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loginWrap{
        display: flex;
        justify-content: center;
        align-items: center;
    .loginBox{
        width: 500px;
        height: 250px;
        .el-button{
            width: 100%;
        }
    }
}
</style>