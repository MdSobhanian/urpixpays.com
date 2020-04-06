<template>
  <div>
    <navbar></navbar>
    <div style="min-height: 80vh;">
      <router-view key="$route.fullPath">
      </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from './Navbar'
  import Footer from './Footer'
  export default {
    components:{
      Navbar,Footer
    }
  }
</script>
