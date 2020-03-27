<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {


  }
}
</script>
<style lang="scss">
  @import "assets/css/style";
</style>

