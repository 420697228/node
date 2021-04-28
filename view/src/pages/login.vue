<template>
  <div class="loginWrap">
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="signIn"><span @click="register">注册用户</span></div>
        <div class="login">
            <van-button round block type="primary" native-type="submit">登录</van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import { register,login } from '@/api/page'
export default {
  name: 'login',
  props: {

  },
  data(){
      return {
          username:'',
          password:''
      }
  },
  created(){
    
  },
  methods:{
      register(){
        register({user_name:this.username,user_pwd:this.password,user_id:this.username}).then(res => {
            if(res.code == 200){
                this.$notify({type: 'success',message: res.msg});
            }else{
                this.$notify({type: 'danger',message: res.msg});
            }
        }).catch((err)=>{

        });
      },
      onSubmit(){
        login({user_name:this.username,user_pwd:this.password}).then(res => {
            if(res.code == 200){
                this.$notify({type: 'success',message: res.msg});
                this.$router.push({
                    name:'index'
                });
                window.localStorage.userInfo = JSON.stringify(res.data);
            }else{
                this.$notify({type: 'danger',message: res.msg});
            }
        }).catch((err)=>{

        });
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
        width: 100vw;
        height: 100vh;
    }
    .signIn{
        text-align: right;
        padding: 18px;
        span{
            color: #1989fa;
        }
    }
    .login{
        margin: 0 18px;
    }
</style>