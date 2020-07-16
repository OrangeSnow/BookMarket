<script>
// import config from './config'
import {get} from './util'

export default {
  async created () {
    // wx.request({
    //   url:config.host+'/weapp/demo',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    const res = await get('/weapp/demo')
    console.log('项目在APP.vue成功运行')
    console.log(res)
  }
}
</script>

<style>

</style>
