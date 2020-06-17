<template>
  <b-navbar class="user_menu" toggleable="lg" type="dark" style="background-color: #161e2c">
    <b-navbar-brand href="#">
      <img src="https://sss.crazy-about-photography.com/resource/static/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/></b-navbar-brand>
    <div class="navbar-menu">
      <b-navbar-nav class="main_menu">
        <b-nav-item v-bind:to="'/home'">CHALLENGE</b-nav-item>
        <b-nav-item v-bind:to="'/best_images'">BEST IMAGES</b-nav-item>
        <b-nav-item v-bind:to="'/info-page'">INFO PAGE</b-nav-item>
        <b-nav-item v-bind:to="'/gallery'">GALLERY</b-nav-item>
        <b-nav-item href="https://urblogpost.com/" target="_blank">BLOG</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto login_menu">
        <!--<b-nav-item-dropdown right no-caret>
          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;
          <template v-slot:button-content>
            <div>
              <b-avatar size="30" href="#foobar"variant="" :src="user.photoURL==''?'./static/imgs/default_avartar.png':user.photoURL"></b-avatar>
              {{user.name}}
            </div>
          </template>
          <b-dropdown-item v-b-toggle.sidebar-right>Profile</b-dropdown-item>

          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>-->
        <side-bar></side-bar>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>
<script>
  import firebase from 'firebase'
  import SideBar from './SideBar'
  import store from "../store";
  export default {
    components:{SideBar},
    data() {
      return {
        user: {
          email: "",
          name:"",
          birthday:"",
          photoURL:store.state.userData.info.photoUrl||''
        }
      }
    },
    created() {
      let self=this
      firebase.auth().onAuthStateChanged(user => {
        if (user){
           console.log('username', store.state.user.data)
          self.email = store.state.userData.info.email
          self.name = store.state.userData.info.name
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
            // case 'InfoPage':
            /*case 'Gallery':
            case 'BestImage':*/
              //console.log('1',this.$router.currentRoute.name)
              //this.$router.push({name:'Home'})
              break;
            default:
              //console.log('2',this.$router.currentRoute.name)
              //this.$router.push({name:'GuestHome'})
              break;

          }

        }else{
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
            case 'InfoPage':
            case 'Gallery':
            case 'BestImage':
              //console.log('1',this.$router.currentRoute.name)
              //this.$router.push({name:'Dashboard'})
              break;
            default:
              //console.log('2',this.$router.currentRoute.name)
              //this.$router.push({name:'GuestHome'})
              break;

          }
        }
      });
    },
    methods:{
      signOut(){
        firebase.auth().signOut()
      }
    },
    watch: {

    }
  }
</script>
