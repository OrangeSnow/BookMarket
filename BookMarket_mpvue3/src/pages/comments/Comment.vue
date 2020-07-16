<template>
  <div class="book_bc">
    <swiper
    :vertical='false'
    :indicator-dots='true' 
    :autoplay='true' 
    :interval='6000'
    :duration='1000'
    :circular='true'
    indicator-color='#fff'
    class="hah"
    >
        <swiper-item class="test">
            <image class='swipe_img' mode='aspectFill' :src="img_address.img1"/>
        </swiper-item>
        <swiper-item class="test">
            <image class='swipe_img' mode='aspectFill' :src="img_address.img2"/>
        </swiper-item>
        <swiper-item class="test">
            <image class='swipe_img' mode='aspectFill' :src="img_address.img3"/>
        </swiper-item>
        <swiper-item class="test">
            <image class='swipe_img' mode='aspectFill' :src="img_address.img4"/>
        </swiper-item>
    </swiper>
    <div class="title_present">
      <img mode='aspectFill' src="../../../static/img/icon_book.png" >
      <img mode='aspectFill' src="../../../static/img/icon_money.png" >
      <img mode='aspectFill' src="../../../static/img/icon_mark.png" >
      <img mode='aspectFill' src="../../../static/img/icon_pencil.png" >
    </div>
    <div class="hot_books">
      <div class="hot_books_title">热门图书</div>
      <HotBooks :tops='tops'></HotBooks>
    </div>
    <div class="title_present">
      <img mode='aspectFill' src="http://user-gold-cdn.xitu.io/2018/10/8/16652cf6afeb3885?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" >
      <img mode='aspectFill' src="http://user-gold-cdn.xitu.io/2018/10/8/16652cf89ad7de45?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" >
      <img mode='aspectFill' src="http://user-gold-cdn.xitu.io/2018/10/8/16652cfa36c4ed53?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" >
      <img mode='aspectFill' src="http://user-gold-cdn.xitu.io/2018/10/8/16652cfc520715ac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" >
    </div>
  </div>
</template>

<script>
import HotBooks from '@/components/HotBooks'
import { post, get } from '@/util'
export default {
  components: {
    HotBooks
  },
  data () {
    return{
      tops: [],
      img_address:{
        img1:'http://user-gold-cdn.xitu.io/2018/10/8/16652cf6afeb3885?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        img2:'http://user-gold-cdn.xitu.io/2018/10/8/16652cf89ad7de45?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        img3:'http://user-gold-cdn.xitu.io/2018/10/8/16652cfa36c4ed53?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        img4:'http://user-gold-cdn.xitu.io/2018/10/8/16652cfc520715ac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1'
      }
    }
  },
  methods:{
    async getTop () {
      const tops = await get('/weapp/top')
      this.tops = tops.list
    }
  },
  created () {
    console.log('comments')
  },
  onPullDownRefresh(){
    this.getTop()
  },
  mounted(){
    this.getTop()
  }
}
</script>

<style lang='scss' scoped>
  .book_bc{
    background-color:#dfcbb2;
    // padding-bottom: 25rpx;
    // border:1px solid red;
    height:1300rpx;
    .swipe_img{
      width:100%;
      height:350rpx;
    }
    .title_present{
      height: 250rpx;
      width:95%;
      margin:35rpx auto;
      background-color: #fff;
      img{
        height:160rpx;
        width:160rpx;
        margin-left:15rpx;
        margin-top:50rpx;
      }
    }
    .hot_books{
      width:95%;
      margin:35rpx auto;
      background-color: #fff;
      padding: 5rpx 0 30rpx 0;
      .hot_books_title{
        margin-top:10rpx;
        margin-left:15rpx;
        font-size:36rpx;
        color:#69481f;
      }
    }
  }

</style>
