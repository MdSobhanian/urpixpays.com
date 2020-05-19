<template>
  <div class="navar-container" :key="isMenu">
    <guest-menu v-if="!isMenu" ></guest-menu>
    <user-menu v-else></user-menu>
  </div>
</template>
<script>
  import {VTextMarquee} from 'vue-text-marquee';
  import firebase from "firebase";
  import GuestMenu from "./GuestMenu";
  import UserMenu from "./UserMenu";
  import store from "../store";
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
        // console.log('userinfo',user.uid)
        if (user){
          window.axios.post(`${process.env.VUE_APP_API_URL}getUser`,{uid:user.uid}).then(({data})=>{
            if (data.state==-1){
              this.$vs.notify(data.notify)
            }
            if (data.state == 0) {
              store.state.user.data= data.result
              self.isMenu=true
              // console.log('username', store.state.user.info.name)
            } else {
              self.isMenu=false
            }
          })
        }else{
          self.isMenu=false
        }
        // console.log("this.isMenu",this.isMenu)
      })

    }
  }
</script>

<style >
.main_menu{
  font-size: 14px;
}
</style>
