import Test from '../assets/api/Test'

export default {
  data() {
    return {
      mAPI:{
        Test, // 接口文档
      }
    }
  },
  filters: {
  },
  methods: {
    UploadSuccessFlie(data) {
      this.enclosures.push(data.data.originalImageUrl)
    },
    ObjForSetArray(data, Array) {
      let list = []
      for(let i in data) {
        let isok = false
        Array.forEach(res => {
          res.list.forEach(resB => {
            if(resB.key === i) {
              isok = true
              resB.value = data[i]
            }
          })
        })
        if(!isok) list.push({name: i, value: data[i]})
      }
      console.log(list) // 打印没有对应参数的列表
    },
    // data是源数据 Obj被赋予对象
    ObjForSetObj (data, Obj) {
      for(let i in Obj) {
        if(data[i]) {
          Obj[i] = data[i]
        }
      }
    },
    ArraySetObj (data) {
      let item = {}
      data.forEach(res => {
        res.list.forEach(resB => {
          if(resB.key) {
            item[resB.key] = resB.value
          }
        })
      })
      return item
    },
    ObjForSetTableList(data, Array) {
      Array.forEach(resA =>  {
        if(resA.key){
          resA.key.forEach(resB => {
            for(let i in resB) {
              if(i !== 'type') {
                resA[i] = data[resB[i]]
              }
            }
          })
        }
      })
    },
    ObjForSetTableObj(data, Obj) {
      if(Obj.key){
        Obj.key.forEach(resB => {
          for(let i in resB) {
            console.log('data[resB[i]]', data[resB[i]], resB[i])
            if(i !== 'type' && Obj[i]) {
              Obj[i] = data[resB[i]]
            }
          }
        })
      }
    },
    TableListForSetObj(tableArray,Array) {
      let array = []
      Array.forEach((resA, index) =>  {
        let obj = {}
        if(resA.key){
          resA.key.forEach(resB => {
            for(let i in resB) {
              if(i !== 'type' && resA[i]) {
                obj[resB[i]] = tableArray[index][i]
              }
            }
          })
        }
        array.push(obj)
      })
      return array
    },
    // getNowFormatDate(data = '') {
    //   let date = new Date(data);
    //   let seperator1 = "-";
    //   let seperator2 = ":";
    //   let month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
    //   let strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
    //   let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    //     + " " + this.setTimeTen(date.getHours()) + seperator2 + this.setTimeTen(date.getMinutes()) + seperator2 + this.setTimeTen(date.getSeconds())
    //   return currentdate;
    // },
    // replaceTime(data) {
    //   return data.replace(/-/g,"/")
    // },
  },
  computed: {
    UserData() {
      return window.localStorage.getItem('UserData') ? JSON.parse(window.localStorage.getItem('UserData')) : {}
    }
  }
}
