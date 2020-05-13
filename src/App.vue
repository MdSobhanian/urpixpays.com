<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
<!--    <router-view :key="$route.fullPath"/>-->
    <loader></loader>
    <router-view />

  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{

  },
  created() {


  }
}
</script>


