<template>
  <b-navbar toggleable="lg" type="dark" style="background-color: #161e2c">
    <b-navbar-brand href="#">
      <img src="https://sss.crazy-about-photography.com/resource/static/imgs/Logo-Horizontal-Small.gif" alt="this slowpoke moves" width=150/>
    </b-navbar-brand>
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
          <b-button v-b-modal.login variant=" log-btn" style="width: 95px;margin-right: 10px;font-size: 14px;">SIGN IN
          </b-button>
          <b-button v-b-modal.register variant=" log-btn" style="width: 95px;font-size: 14px;">SIGN UP</b-button>


        </div>

        <b-modal id="login" size="sm" centered hide-header hide-footer>
          <login @cancel="$bvModal.hide('login')"></login>
        </b-modal>
        <b-modal id="register" size="md" centered hide-header hide-footer>
          <register @cancel="$bvModal.hide('register')"></register>
        </b-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  import firebase from 'firebase'
  import Login from "../components/Login";
  import Register from "../components/Register";
  import SideBar from './SideBar'
  export default {
    components: {
      Login, Register,SideBar
    },
    data() {
      return {
        user: ''
      }
    },
    mounted() {
      let self=this
      firebase.auth().onAuthStateChanged(user => {
        if (user){
          //this.displayName=user.displayName;
          self.user =user;
          // console.log('login check1',this.user);
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
              /*case 'InfoPage':
              case 'Gallery':
              case 'BestImage':*/
              //console.log('1', this.$router.currentRoute.name)
              //this.$router.push({name:'Home'})
              break;
            default:
              //console.log('2',this.$router.currentRoute.name)
              //this.$router.push({name:'GuestHome'})
              break;
          }

        }else{
          /*this.$router.replace({
            name: "Login"
          });*/
          //console.log('login check2',user);
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
            case 'InfoPage':
            case 'Gallery':
            case 'BestImage':
              //console.log('1',this.$router.currentRoute.name)
              break;
            default:
              // console.log('2',this.$router.currentRoute.name)
              //self.$router.push({name:'GuestHome'})
              break;

          }
        }
      });
    },
    created() {
      let self=this
      firebase.auth().onAuthStateChanged(user => {
        if (user){
          //this.displayName=user.displayName;
          self.user =user;
          // console.log('login check1',this.user);
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
            /*case 'InfoPage':
            case 'Gallery':
            case 'BestImage':*/
              //console.log('1', this.$router.currentRoute.name)
              //this.$router.push({name:'Home'})
              break;
            default:
              //console.log('2',this.$router.currentRoute.name)
              //this.$router.push({name:'GuestHome'})
              break;
          }

        }else{
          /*this.$router.replace({
            name: "Login"
          });*/
          //console.log('login check2',user);
          switch (this.$router.currentRoute.name) {
            case 'GuestHome':
            case 'InfoPage':
            case 'Gallery':
            case 'BestImage':
              //console.log('1',this.$router.currentRoute.name)
              break;
            default:
              // console.log('2',this.$router.currentRoute.name)
              self.$router.push({name:'GuestHome'})
              break;

          }
        }
      });
    },
    watch: {
      user: function () {

      }
    }
  }
</script>
