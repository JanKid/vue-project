<template>
  <div id="app">
   <common-header></common-header>
    <div class="body" :style="style">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      style: ''
    }
  },
  mounted () {
    this.calcHeight()
  },
  methods: {
    calcHeight () {
      let bdHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let header = document.querySelector('.header')
      let footer = document.querySelector('.footer')
      let headerHeight = 0
      let footerHeight = 0
      if (header && header.style.display !== 'none') {
        headerHeight = header.offsetHeight
      }
      if (footer && footer.style.display !== 'none') {
        footerHeight = footer.offsetHeight
      }
      bdHeight = bdHeight - (headerHeight + footerHeight)
      this.style = `min-height:${bdHeight}px`
    }
  }
}
</script>

<style lang="scss">
@import "./styles/index.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //
  color: #2c3e50;
}
.body {
  padding: 40px 0;
}
</style>
