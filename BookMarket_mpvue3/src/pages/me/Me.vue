<template>
  <div class="container">
    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <p><b>{{userInfo.nickName}}</b></p>
      </div>
      <button class="login_style" open-type="getUserInfo" @getuserinfo="bindGetUserInfo"><b>授权登录</b></button>
      <div class="person_message">
        <p>语言：{{userInfo.language}}</p>
        <p>城市：{{userInfo.city}}</p>
        <p>省份：{{userInfo.province}}</p>
      </div>
      <img class="mark_img" mode='aspectFit' src="../../../static/img/tree.png"/>
    </div>
<!-- <button @click="getUserInfo">登录</button> -->
  </div>
 
</template>

<script>
// import card from '@/components/card'

export default {
  data () {
    return {
      // motto: 'Hello World',
      // userInfo: {},
      // canIUse: wx.canIUse('button.open-type.getUserInfo'),
      userInfo:{
        // avatarUrl:'../../../static/img/unlogin_img.png',
        avatarUrl:'http://user-gold-cdn.xitu.io/2018/10/8/16652d44a14357ea?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        nickName:'请登陆'
      },
      userinfo:{
        avatarUrl:'http://user-gold-cdn.xitu.io/2018/10/8/16652d44a14357ea?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        nickName:'游客'
      }
    }
  },

  // components: {
  //   card
  // },

  methods: {
    // bindViewTap () {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    bindGetUserInfo (e) {
      console.log(e)
      console.log(e.target.userInfo)
      this.userInfo = e.target.userInfo
      wx.setStorageSync('userinfo', this.userInfo)
    },
    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           console.log('成功登陆')
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    // this.bindGetUserInfo()
    wx.setStorageSync('userinfo', this.userinfo)
  }
}
</script>

<style scoped>
.container{
  background-color:#f9edd5;
  height:1100rpx;
}
.mark_img{
  height:230rpx;
  position:absolute;
  bottom:0rpx;
  left:8%;
}
.person_message{
  margin:27rpx 0;
  color:#5a360a;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-nickname{
  margin-top: 27rpx;
  font-size:48rpx;
}
.userinfo-avatar {
  width: 198rpx;
  height: 198rpx;
  margin: 120rpx 120rpx 12rpx 120rpx;
  border-radius: 50%;
}
.login_style{
  margin-top:40rpx;
  width:520rpx;
  background-color: #ade39b;
  color:#3b8025;
}
.userinfo-nickname {
  color: #5a360a;
}

</style>
