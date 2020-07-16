<template>
    <!-- <div>图书id:{{bookid}}</div> -->
    <BookPresent :info='info'></BookPresent>
</template>

<script>
import {get} from '@/util'
import BookPresent from '@/components/BookPresent'

export default {
  components: {
    BookPresent
  },
  data(){
    return {
      bookid:'',
      info:{}
    }
  },
  methods:{
    async getDetail(){
      const info = await get('/weapp/bookdetail',{id:this.bookid})
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    }
  },
  mounted(){
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  },
    onShareAppMessage() {
        return {
        title: '转发这本书',//转发功能需要加路径，并且和生命周期一个层级，否则会报错
        path: 'pages/detail/Detail'
        }
    }
}
</script>

<style>

</style>

