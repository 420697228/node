<template>
  <div class="wrapper">
      <!-- 头 -->
      <div class="header">
          <div class="header_l"></div>
          <div class="header_r">
              <div class="headr_d1">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
              </div>
              <!-- 头像 -->
              <div class="headr_d2">
                  <ul class="headrUl clearFixed">
                    <li id="domPersonal">
                        <el-dropdown>
                            <span class="el-dropdown-link">admin<i class="el-icon-arrow-down el-icon--right"></i><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>  
                            <template #dropdown>
                                <el-dropdown-menu>
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {

  },
  data(){

  },
  created(){

  },
  methods:{

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
            float: left;
            background-color: #3a3f51;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #454b61;
            -webkit-transition: width .3s;
            transition: width .3s;
            overflow: hidden;
        }
        .header_r {
            height: 100%;
            margin-left: 200px;
            background-color: #fff;
            -webkit-box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 1px 0 rgb(0 0 0 / 5%);
            box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 1px 0 rgb(0 0 0 / 5%);
            -webkit-transition: all .3s;
            transition: all .3s;
        }
        .headr_d1 {
            float: left;
            height: 100%;
            margin-left: 20px;
        }
    }
</style>