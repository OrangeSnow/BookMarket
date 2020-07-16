<template>
    <div>
        <div class="slide" :key='imgindex' v-for='(top,imgindex) in tops'>
            <img     
                class='slide-image' 
                mode='aspectFit' 
                :key='top.id'
                :src="top.image" 
                >
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    props: ['tops']
}
</script>
<style lang='scss' scoped>
  .slide-image{
    float:left;
    width:23%;
    height:250rpx;
    margin-left:10rpx;
  }
  .clear{
      clear:both;
  }
</style>

