<template>
  <div>
    <navbar @show="isShow=true"></navbar>
    <div style="min-height: 80vh;">
      <router-view key="$route.fullPath" v-if="isShow">
      </router-view>
      <loader v-else style="position: fixed;left: 0;top: 0"/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from './Navbar'
  import Footer from './Footer'
  import Loader from "../components/Loader";
  export default {
    components:{
      Navbar,Footer,Loader
    },
    data(){
      return{
        isShow:false
      }
    },

  }
</script>
