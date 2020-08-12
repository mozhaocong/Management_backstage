<template>
  <el-upload
    v-if="showUpload"
    class="upload-demo"
    action="http://report.gdkeyong.com/service/file/uploadImage"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="success"
    :before-remove="beforeRemove"
    multiple
    :limit="limit"
    :headers="headers"
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
        limit: 1,
        showUpload: true,
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
          let obj = {
            name: this.value,
            url: `http://report.gdkeyong.com/upload/img/${this.value}`
          }
          this.fileList.push(obj)
        }
      },
      success(esponse, file, fileList) {
        this.$emit('UploadSuccess', esponse)
      },
      handleRemove(file, fileList) {
        // console.log('handleRemove')
        this.$emit('input','')
        // console.log(file, fileList);
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
