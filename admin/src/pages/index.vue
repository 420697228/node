<template>
  <div class="wrapper">
      <!-- 头 -->
      <div class="header">
          <div class="header_l"><img src="data:image/png;base64,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" alt="logo">前端三剑客</div>
          <div class="header_r">
              <div class="headr_d1">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
              </div>
              <!-- 头像 -->
              <div class="headr_d2">
                  <ul class="headrUl">
                    <li id="domPersonal">
                        <el-dropdown>
                            <span class="el-dropdown-link">admin<i class="el-icon-arrow-down el-icon--right"></i><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>  
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item><i class="el-icon-user-solid"></i> 我的主页</el-dropdown-item>
                                    <el-dropdown-item><i class="el-icon-switch-button"></i> 退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="wrapper_con">
        <el-menu 
        default-active="1-4-1" 
        background-color="#3a3f51" 
        text-color="#fff"
        active-text-color="#222" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
            <el-submenu index="1">
                <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
            </el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {

  },
  data(){
      return{
          isCollapse: false
      }
  },
  created(){

  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .wrapper{
        position: relative;
        background-color: #f0f3f4;
        width: 100%;
        height: 100%;
        .header {
            height: 50px;
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 999;
        }
        .header_l {
            width: 200px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            float: left;
            color: #fff;
            font-size: 20px;
            background-color: #3a3f51;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #454b61;
            -webkit-transition: width .3s;
            transition: width .3s;
            overflow: hidden;
            img{
                width: 40px;
                margin-right: 16px;
            }
        }
        .header_r {
            height: 100%;
            margin-left: 200px;
            background-color: #fff;
            -webkit-box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 1px 0 rgb(0 0 0 / 5%);
            box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 1px 0 rgb(0 0 0 / 5%);
            -webkit-transition: all .3s;
            transition: all .3s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
        }
        .headr_d1 {
            float: left;
            height: 100%;
            margin-left: 20px;
            display: flex;
            align-items: center;
        }
        .headrUl{
            display: flex;
            align-items: center;
            #domPersonal{
                .el-dropdown-link{
                    height: 100%;
                    display: block;
                    display: flex;
                    align-items: center;
                    .el-avatar{
                        margin-left: 10px;
                    }
                }
            }
        }
        .wrapper_con{
            height: 100%;
            position: relative;
            .el-menu{
                width: 200px;
                position: absolute;
                top: 50px;
                left: 0;
                bottom: 0;
            }
        }
        
    }
</style>