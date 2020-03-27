<template>
  <div>
    <navbar></navbar>
    <div style="min-height: 80vh;margin-top: 77px">
      <router-view>
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
