<template>
  <div class="container">
    <div class="main-bd">
      <div class="page-main">
        <common-side></common-side>
        <div class="page-component">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-bd {
  position: relative;
}
.page-main {
  background: #fff;
}
</style>