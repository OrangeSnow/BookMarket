<template>
    <div>
        <img :src="info.image" alt="" class="img_detail" mode='aspectFit'/>
        <div class="info">
            <div class="title">
                {{info.title}}
            </div>
            <div class="author">
                {{info.author}}
            </div>
            <div class="price">
                市场价：{{info.price}}
            </div>
            <div class="count">
                点击次数：{{info.count+1}}
            </div>
        </div>
        <div class="publish_user">
            <div class="publish_person"><b>图书发布人：{{info.nickName}}</b></div>
            <img class="userinfo-avatar" :src="info.avatarUrl"/>
        </div>
        <div class="summary">
            <!-- {{info.summary}} -->
            <p :key='i' v-for='(text,i) in info.summary'>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['info']
}
</script>

<style lang="scss" scoped>
.img_detail{
    position: relative;
    height:300rpx;
    left:50rpx;;
    top:30rpx;
    border:8rpx solid #ba996e;
}
.info{
    margin-top:45rpx;
    text-align: center;
    font-size:30rpx;
    color:#ba996e;
    .title{
        font-size: 40rpx;
        color:#69481f;
    }
    .author{
        margin-top:7rpx;
    }
}
.publish_user{
    text-align:center;
    margin:10rpx auto;
    .publish_person{
        color:#69481f;
    }
}
.summary{
    color:#69481f;
    font-size:32rpx;
    padding:10rpx;
    p{
        text-indent: 2em;
    }
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
</style>
