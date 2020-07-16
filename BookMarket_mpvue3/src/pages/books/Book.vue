<template>
  <div class="book_list">
    <div class="contain_button">
      <button @click='scanBook' class='btn'><b>添加图书</b></button>
    </div>
    <!-- <div>
      <div v-for='book in books' :key='book.id'>{{book.title}}</div>
    </div> -->
    <Card :key='book.id' v-for='book in books' :book='book'></Card>

    <p class='no-more' v-if='!more'>全部图书已经加载出来了</p>

  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { showSuccess, post, get, showModal } from '@/util'
import Card from '@/components/card'
import config from '@/config'
export default {
  components: {
    Card,
  },
  data () {
    return {
      books: [],
      page:0,
      more:true,
      userinfo:{}
    }
  },
  created () {
    console.log('book')
  },
  methods:{
    async addBook (isbn) {
      console.log(isbn)
      const res = await post('/weapp/addbook', {
        isbn,
        avatarUrl:this.userinfo.avatarUrl,
        nickName:this.userinfo.nickName
      })
      showModal('添加成功',`${res.title}添加成功`)
      // showModal('添加成功', `${res.title}添加成功`)
      // if(res.code == 0 && res.data.title){
      //   showSuccess('添加成功',`${res.data.title}添加成功9`)
      // }
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
            // console.log(res.result)
          }
        }
      })
    },
    async getList(init){
      if(init){
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist',{page:this.page})
      if(books.list.length<5 && this.page>0){
        this.more = false
        console.log(this.more)
      }
      if(init){
        this.books = books.list
        wx.stopPullDownRefresh()
      }else{
        this.books = this.books.concat(books.list)
      }

      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }

  },
  onPullDownRefresh(){
    this.getList(true)
    console.log('下拉刷新')
    this.userinfo = wx.getStorageSync('userinfo')
  },
  onReachBottom(){
    if(!this.more){
      // 没有更多了
      return false
    }
    this.page = this.page+1
    this.getList()
  },
  mounted(){
    this.getList(true)
    this.userinfo = wx.getStorageSync('userinfo')
    console.log(this.userinfo)
  }
}
</script>

<style lang='scss'>
.book_list{
  background-color: #f9edd5;
  .contain_button{
    height:120rpx;
    padding-top:20rpx;
    .btn{
      width:520rpx;
      background-color: #ade39b;
      color:#3b8025;
    }
  }
}

.no-more{
  text-align: center;
  font-size: 12px;
  margin-bottom:6px;
}
</style>
