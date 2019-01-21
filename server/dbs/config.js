export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '2285462590@qq.com'
    },
    get pass(){
      return ' '
    },
    get code(){
      return Math.random().toString().slice(2,6).toUpperCase();
    },
    get expire(){
      return () => {
        return new Date().getTime() + 60*60*1000
      }
    }
  }
}