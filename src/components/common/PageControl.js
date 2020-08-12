
export default {
  data() {
    return {
      isBack: true,
      isReportPop: false,
      pageStack: []
    }
  },
  created() {
    this.isBack = true
  },
  activated() {
    this.isBack = true
  },
  methods: {
    leave() {
      this.isBack = false
      this.goTo({ name: 'back' })
    },
    cleanStack() {
      this.pageStack.splice(1, this.pageStack.length - 1)
    },
    go(type, data) {
      if (this.goBefore(type, data)) return
      if (data) {
        this.pageStack.push({
          type,
          data
        })
      } else {
        this.pageStack.push(type)
      }
      this.goAfter(type, data)
    },
    goBefore(type, data) { },
    goAfter(type, data) { },
    goBack(opts) {
      window.h5vue.$emit('funcCmpDestory')
      if (this.isBack && this.pageStack.length > 1) {
        this.pageStack.pop()
        let tmp = this.pageStack.pop()
        if (typeof tmp === 'string') {
          this.go(tmp, opts)
        } else if (this.isReportPop) {
          this.$store.commit(this.ACTION.REPORT.POP)
        } else {
          this.go(tmp.type, tmp.data || opts)
        }
        return true
      }
    },
    getPageData(type) {
      let tmp
      if (type) {
        tmp = this.pageStack.filter(v => {
          return v === type || v.type === type
        })[0]
      } else {
        tmp = this.pageStack[this.pageStack.length - 1] || ''
      }
      return tmp.data || tmp
    },
    getCurType() {
      let tmp = this.pageStack[this.pageStack.length - 1] || ''
      return tmp.type || tmp
    },
    isCurPage(type) {
      let tmp = this.pageStack[this.pageStack.length - 1] || ''
      return type === tmp || type === tmp.type
    },
    // 递归返回，子组件里可能有PageCtrl，孙子组件也可能有PageCtrl。层层返回 最为致命。
    // 已知问题：孙子组件PageStack如果已有多层，子组件前进一层再返回，操作的会是孙子组件的PageStack。 尽量避免这种结构。
    rGoBack(curPage) {
      if (!curPage) false

      let back = false
      // 先深入子组件里，判断是否有返回
      for (const c of curPage.$children) {
        back = this.rGoBack(c)
        if (back) return true
      }

      // 如果孩子里都没返回，则判断自身是否有返回
      if (!back && curPage.pageStack) {
        back = curPage.goBack()
      }

      return back
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.isBack && this.rGoBack(this)) {
      next(false)
      return
    } else {
      next()
    }
  }
}

