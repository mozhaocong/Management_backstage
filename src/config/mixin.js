import transactionInformation from '../pages/transactionInformation/api'

export default {
  data() {
    return {
      mAPI:{
        transactionInformation, // 接口文档
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
    ObjForSetTableObj(setObj, Obj) {
      let JSONData = JSON.parse(JSON.stringify(setObj))
      setObj.tableKey.forEach(res => {
        if(setObj[res.name] && Obj[res.name]) {
          res.value = Obj[res.name]
        }
        delete JSONData[res.name]
      })
      delete JSONData.tableKey
      for(let i in JSONData) {
        let data = {
          name: i,
          value: Obj[i] || ''
        }
        setObj.tableKey.push(data)
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
  },
  computed: {
    UserData() {
      return window.localStorage.getItem('UserData') ? JSON.parse(window.localStorage.getItem('UserData')) : {}
    }
  }
}
