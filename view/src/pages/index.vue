<template>
  <div>
    <div class="loading" v-if="pageLoading">
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
    </div>
    <div v-else>
        <h3>留言列表</h3>
        <van-field
            v-model="message"
            rows="1"
            autosize
            label="留言"
            type="textarea"
            placeholder="请输入留言"
        />
        <div class="user"><span>{{userInfo.user_name}}：</span><van-button @click="leaveMsg" class="leaveMsg" type="primary" size="small">提交</van-button></div>
        
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <div v-for="item in list" :key="item._id" class="msgMain">
                <div class="name"><span>姓名：</span><span>{{item.user_id.user_name}}</span><van-icon v-if="item.user_id._id == userInfo._id" @click="deletemsg(item._id)" name="delete-o" /></div>
                <div class="content"><div>留言内容：</div><span>{{item.content}}</span></div>
            </div>
        </van-list>
    </div>
  </div>
</template>

<script>
import { getLeaves,Leaves,deleteLeaver } from '@/api/page'
export default {
  name: 'index',
  props: {

  },
  data(){
      let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {};
      return{
          message:'',
          pageLoading:true,
          loading:false,
          finished:false,
          userInfo: userInfo,
          query:{
            size:10,
            page:1
          },
          list:[]
      }
  },
  created(){
      this.getLeaves();
  },
  methods:{
      getLeaves(){
            this.loading = true;
            getLeaves(this.query).then((res)=>{
                this.pageLoading = false;
                this.loading = false;
                this.list = this.list.concat(res.data.list);
                if(res.data.pagination.total <= this.list.length){
                    this.finished = true;
                }
            }).catch((err)=>{
                this.pageLoading = false;
            });
      },
      leaveMsg(){
          let params = {
              user_id: this.userInfo._id,
              content: this.message
          };
          Leaves(params).then((res)=>{
              if(res.code == 200){
                  this.$notify({type: 'success',message: res.msg});
                  this.list = [];
                  this.query.page = 1;
                  this.getLeaves();
              }else{
                  this.$notify({type: 'danger',message: res.msg});
              }
          }).catch((err)=>{

          });
      },
      deletemsg(_id){
          let params = {
              user_id: this.userInfo._id,
              _id
          };
        deleteLeaver(params).then((res)=>{
              if(res.code == 200){
                  this.$notify({type: 'success',message: res.msg});
                  this.list = [];
                  this.query.page = 1;
                  this.getLeaves();
              }else{
                  this.$notify({type: 'danger',message: res.msg});
              }
        }).catch(()=>{

        });
      },
      onLoad(){
          this.loading = true;
          this.query.page++;
          this.getLeaves();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .loading{
        .van-skeleton{
            margin: 20px 0;
        }
    }
    h3{
        text-align: center;
    }
    .leaveMsg{
        margin: 20px;
    }
    .user{
        color: #666;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .van-list{
        padding: 16px;
        height: calc( 100vh - 210px );
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .name{
        color: #666;
        padding-bottom: 6px;
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    .content{
        padding-top: 6px;
        div{
            color: #999;
            margin-bottom: 6px;
        }
        span{
            white-space: pre-wrap;
            margin-left: 20px;
            display: block;
        }
    }
    .msgMain{
        margin-bottom: 30px;
    }
    .van-icon-delete-o{
        font-size: 20px;
        position: absolute;
        right: 0;
        color: red;
    }
</style>