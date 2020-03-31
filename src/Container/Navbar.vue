<template>
  <div class="navar-container" >
    <b-navbar toggleable="lg" type="dark" style="background-color: #161e2c">
      <b-navbar-brand href="#"><img src="/static/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main_menu">
          <b-nav-item v-bind:to="'landing'">HOME</b-nav-item>
          <b-nav-item v-bind:to="'best_images'">BEST IMAGES</b-nav-item>
          <b-nav-item v-bind:to="'info-page'">INFO PAGE</b-nav-item>
          <b-nav-item v-bind:to="'gallery'">GALLERY</b-nav-item>
          <b-nav-item href="https://urblogpost.com/" target="_blank">BLOG</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto login_menu">
          <div>
            <b-button variant=" log-btn" style="width: 95px;margin-right: 10px;font-size: 14px;">SIGN IN</b-button>
            <b-button variant=" log-btn" style="width: 95px;font-size: 14px;">SIGN UP</b-button>
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
.main_menu{
  font-size: 14px;
}
</style>
