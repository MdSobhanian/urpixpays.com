<template>
  <div class="navar-container">
    <b-navbar toggleable="lg" type="dark" style="background-color: #161e2c">
      <b-navbar-brand href="#">
        <img src="../assets/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="margin-top: 7px;">
          <b-nav-item href="#">HOME</b-nav-item>
          <b-nav-item href="#">BEST IMAGES</b-nav-item>
          <b-nav-item href="#">INFO PAGE</b-nav-item>
          <b-nav-item href="#">GALLERY</b-nav-item>
          <b-nav-item href="https://urblogpost.com/" target="_blank">BLOG</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
      <div class="btn-container">
        <div class="hide-btn">
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content style="width: 30px;height: 30px;">
              <p class="navbar-toggler-icon hide-menu-btn"
                 v-on:click="project_show=!project_show"></p>
            </template>
            <div style="display: flex">
              <div v-if="project_show==1" class="projects_div">
                <div class="dropdown-item" href="#">HOME</div>
                <div class="dropdown-item" href="#">BEST IMAGES</div>
                <div class="dropdown-item" href="#">INFO PAGE</div>
                <div class="dropdown-item" href="#">GALLERY</div>
                <div class="dropdown-item" href="#" style="border-bottom: none;">BLOG</div>
              </div>
            </div>
          </b-nav-item-dropdown>
        </div>
        <b-button variant="outline-primary2 log-btn" style="width: 95px;margin-right: 10px;">SIGN IN</b-button>
        <b-button variant="outline-primary2 log-btn" style="width: 95px;">SIGN UP</b-button>
      </div>

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

