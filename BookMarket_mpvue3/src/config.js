//配置项

// 本地
// const host = 'http://localhost:5757'

//开发环境
const host = 'https://bmg41cxh.qcloud.la'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config