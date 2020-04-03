<template>
  <div class="navar-container" >
    <guest-menu v-if="!isMenu"></guest-menu>
    <user-menu v-else></user-menu>
  </div>
</template>
<script>
  import {VTextMarquee} from 'vue-text-marquee';
  import firebase from "firebase";
  import GuestMenu from "./GuestMenu";
  import UserMenu from "./UserMenu";
  export default {
    components: {GuestMenu,UserMenu},
    component: {
      VTextMarquee: VTextMarquee
    },
    data() {
      return {
        project_show: 0,
        indexActive:0,
        isMenu:false,
      }
    },
    methods: {},
    created() {
      console.log(firebase.auth().currentUser)
      let self=this
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          self.isMenu=true
        } else {
          self.isMenu=false
        }
      })
      console.log(this.isMenu)
    }
  }
</script>

<style >
.main_menu{
  font-size: 14px;
}
</style>
