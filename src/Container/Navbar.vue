<template>
  <div style="position: fixed; width: 100%;top: 0">
    <b-navbar toggleable="lg" type="dark" style="background-color: #161e2c">
      <b-navbar-brand href="#">
        <img src="../assets/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">HOME</b-nav-item>
          <b-nav-item href="#">BEST IMAGES</b-nav-item>
          <b-nav-item href="#">INFO PAGE</b-nav-item>
          <b-nav-item href="#">GALLERY</b-nav-item>
          <b-nav-item href="https://urblogpost.com/" target="_blank">BLOG</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" style="float: right">
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <p class="navbar-toggler-icon hide-menu-btn" v-on:click="project_show=!project_show"
                 style="margin-top: 15px;margin-right: 10px;"></p>
            </template>
            <div style="display: flex">
              <div v-if="project_show==1" class="projects_div" style="">
                <div class="dropdown-item" href="#">HOME</div>
                <div class="dropdown-item" href="#">BEST IMAGES</div>
                <div class="dropdown-item" href="#">INFO PAGE</div>
                <div class="dropdown-item" href="#">GALLERY</div>
                <div class="dropdown-item" href="#" style="border-bottom: none;">BLOG</div>
              </div>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-button variant="outline-primary2 log-btn" style="width: 90px;margin-right: 10px;">SIGN IN</b-button>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-button variant="outline-primary2 log-btn" style="width: 95px;">SIGN UP</b-button>
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
        project_show: 0
      }
    },
    methods: {}
  }
</script>
<style>
  .v-marquee {
    background-color: #17a2b8 !important
  }

  .navbar-dark .navbar-nav .nav-link {
    color: white !important;
    height: 40px;
  }

  .log-btn {
    border: 0.5px solid white;
    color: white;
    font-size: 13px;
  }

  .log-btn:hover {
    color: black !important;
    background: white !important;
    outline: 0 !important;
    border: 0 !important;
  }

  .dropdown-menu-right.show {
    background: none;
    border: none;
  }

  .dropdown-item {
    border-bottom: 0.5px solid white;
    color: white;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .projects_div {
    top: 0px;
    border-right: solid 1px gray;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8) !important;
    background-clip: padding-box;
    border: 1px solid #fff;
    border-radius: 0 !important;
    color: white !important;
  }

  .hide-menu-btn:focus {
    outline: 0 !important;
  }
</style>
