<template>
  <div class="navar-container" >
    <b-navbar toggleable="lg" type="dark" style="background-color: #161e2c">
      <b-navbar-brand href="#"><img src="../assets/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main_menu">
          <b-nav-item v-bind:to="'landing'">HOME</b-nav-item>
          <b-nav-item v-bind:to="'best_images'">BEST IMAGES</b-nav-item>
          <b-nav-item href="#">INFO PAGE</b-nav-item>
          <b-nav-item href="#">GALLERY</b-nav-item>
          <b-nav-item href="https://urblogpost.com/" target="_blank">BLOG</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto login_menu">
          <div>
            <b-button variant=" log-btn" style="width: 95px;margin-right: 10px;">SIGN IN</b-button>
            <b-button variant=" log-btn" style="width: 95px;">SIGN UP</b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import {VTextMarquee} from 'vue-text-marquee';

  export default {
    component: {
      VTextMarquee: VTextMarquee
    },
    data() {
      return {
        project_show: 0,
        indexActive:0
      }
    },
    methods: {}
  }
</script>

<style >

</style>
