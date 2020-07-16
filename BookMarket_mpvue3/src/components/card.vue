<template>
    <a :href="detailJump">
        <div class="book-card">
            <div class="book_cover"  @click.stop="img_maxed">
                <image :src="book.image" class="img" mode="aspectFit"/>
            </div>
            <div class="detail">
                <div class="row">
                    <div class="right">
                        豆瓣评分：{{book.rate}}
                    </div>
                    <div class="left">
                        {{book.title}}
                    </div>
                </div>
                <div class="row">
                    <div class="right">
                        {{book.publisher}}
                    </div>
                    <div class="left">
                        {{book.author}}
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: ['book'],
    computed:{
        detailJump(){
        return '/pages/detail/main?id='+this.book.id
        }
    },
    methods:{
        img_maxed(){
            wx.previewImage({
                current:this.book.image,
                urls:[this.book.image]
            })
        }
    }
}
</script>
<style lang='scss' scoped>
.book-card{
  overflow: hidden;
  padding:5px;
  font-size:14px;
  margin: 25rpx 0 0 0;
  background-color:#fff;
  color:#5a360a;
  .book_cover {
    overflow: hidden;
    width: 93px;
    height: 120px;
    float: left;
    margin:0 auto;
    .img{
      margin-top:-60px;
      min-width: 100%;
      max-width: 100%;;
    }
  }
  .detail{
    margin-left: 100px;
    .row{
      line-height:20px;
      margin-bottom:3px;
    }
    .right{
      float: right;
      
    }
    .left{
      margin-right:80px;
    }
  }
}
</style>










