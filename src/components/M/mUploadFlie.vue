<template>
  <el-upload
    class="upload-demo"
    action="http://report.gdkeyong.com/service/file/uploadFile"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="success"
    :before-remove="beforeRemove"
    :headers="headers"
    multiple
    :limit="limit"
    :on-exceed="handleExceed"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>
<script>
  export default {
    props: ['value'],
    data() {
      return {
        fileList: [],
        limit: 10,
        headers: {}
      };
    },
    created() {
      this.setfileList()
      let data = {token: this.UserData.token}
      this.headers = data
    },
    methods: {
      setfileList() {
        if(this.value) {
          this.fileList = []
          this.value.forEach(res => {
            let obj = {
              name: res,
              url: `http://report.gdkeyong.com/upload/img/${res}`
            }
            this.fileList.push(obj)
          })
        }
      },
      success(esponse, file, fileList) {
        this.$emit('UploadSuccess', esponse)
      },
      handleRemove(file, fileList) {
        console.log(fileList)
        let data = []
        fileList.forEach(res => {
          data.push(res.name)
        })
        this.$emit('input', data)
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    watch:{
      value() {
        console.log(this.value)
        this.setfileList()
      }
    }
  }
</script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                