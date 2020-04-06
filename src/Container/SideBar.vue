<template>
  <div id="parentx" >
    <b-button @click="setActive(true)" variant=" log-btn" style="padding: 0;display: flex">
<!--      <i class="fas fa-bars"></i>-->
      <vs-avatar  size="30px" :src="user.photoURL==''?'./static/imgs/default_avartar.png':user.photoURL"/><div style="line-height: 40px;color: white">{{user.name}}</div>
    </b-button>
    <vs-sidebar position-right :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1"  color="success" class="sidebarx" spacer :value="active">
      <div @click="setActive(false)" style="position: absolute; top: 0; left: 10px;cursor: pointer"><i class="fas fa-times"></i></div>
      <div class="header-sidebar" slot="header" >
        <vs-avatar  size="70px" :src="user.photoURL==''?'./static/imgs/default_avartar.png':user.photoURL"/>
      </div>
      <vs-sidebar-group open title="UrPixPays">
<!--        <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce">-->
<!--          Toggle Sidebar-->
<!--        </vs-sidebar-item>-->
        <vs-sidebar-item index="2" icon="schedule" v-bind:to="'home'" @click="setActive(false)">
          Challenge
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="shop" v-bind:to="'best_images'" @click="setActive(false)">
          Best Images
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="description" v-bind:to="'info-page'" @click="setActive(false)">
          Info Page
        </vs-sidebar-item>
        <vs-sidebar-item index="5" icon="perm_media" v-bind:to="'gallery'" @click="setActive(false)">
          Gallery
        </vs-sidebar-item>
        <div class="vs-sidebar--item" ><a href="https://urblogpost.com/" target="_blank"><i class="fas fa-blog"></i>
          <span style="margin-left: 10px">Blog</span>
        </a></div>
        <!--<vs-sidebar-item index="5" icon="verified_user">
          Configurations
        </vs-sidebar-item>-->
        <!--<vs-sidebar-group open :title="user.name">
          <vs-sidebar-item index="2.1" icon="store">
            Store
          </vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people">
            Nature
          </vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style">
            Style
          </vs-sidebar-item>
        </vs-sidebar-group>-->
        <!--<vs-sidebar-item index="2" icon="gavel">
          History
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https">
          Security
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help">
          Help
        </vs-sidebar-item>-->
      </vs-sidebar-group>
      <vs-sidebar-group open :title="user.name">
        <vs-sidebar-item index="2.10" icon="store">
          My Profile
        </vs-sidebar-item>
        <vs-sidebar-item index="2.11" icon="filter">
          My Photos
        </vs-sidebar-item>
        <vs-sidebar-item index="2.12" icon="account_balance">
          Balance Overview
        </vs-sidebar-item>
        <vs-sidebar-item index="2.13" icon="local_post_office">
          Bidding Details
        </vs-sidebar-item>
        <vs-sidebar-item index="2.14" icon="shopping_cart">
          Cart Details
        </vs-sidebar-item>
        <vs-sidebar-item index="2.15" icon="local_atm">
          Products Purchased
        </vs-sidebar-item>
        <vs-sidebar-item index="2.16" icon="category">
          Product Sold
        </vs-sidebar-item>
        <vs-sidebar-item index="2.17" icon="people">
          Invitation Table
        </vs-sidebar-item>
        <vs-sidebar-item index="2.18" icon="monetization_on">
          Sponsorship Table
        </vs-sidebar-item>
        <vs-sidebar-item index="2.19" icon="payment">
          Transactions
        </vs-sidebar-item>
      </vs-sidebar-group>

      <!--<vs-divider icon="person" position="left">
        User
      </vs-divider>-->


      <vs-sidebar-item index="6" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
<!--        <vs-button icon="settings" color="primary" type="border"></vs-button>-->
        <vs-button icon="reply" color="danger" type="flat" @click="signOut">sign out</vs-button>
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
  import firebase from "firebase";
  export default {
    data:()=>({
      active:false,
      notExpand: false,
      reduce: false,
      user: {
        email: "",
        name:"",
        birthday:"",
        photoURL:''
      }
    }),
    methods:{
      signOut(){
        this.active=false
        firebase.auth().signOut()
      },
      setActive(val){
        this.active=val, this.notExpand = false
        console.log(this.active)
      }
    },
    beforeDestroy() {
      this.active=false
      console.log('destroyed',this.active)
    },
    created() {
      this.active=false
      //console.log('test')
      let self=this
      firebase.auth().onAuthStateChanged(user => {
        if (user){
          //this.displayName=user.displayName;
          self.user =user;
          //console.log('login check1',self.user);
          firebase.firestore().collection('users').doc(user.uid).onSnapshot(doc => {
            self.user=doc.data();
            if (doc.data().photoURL==undefined){
              self.user.photoURL=''
            }
            // console.log(self.user)

          })
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
    }
  }
</script>

<style lang="scss">
  .vs-sidebar{
    background-color: #121822;
    color: white;
    border: 1px solid gray;
  }
  .header-sidebar{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h4{
      display : flex;
      align-items:center;
      justify-content: center;
      width : 100%;
      button{
        margin-left: 10px
      }
    }
  }
  .footer-sidebar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button{
      border: 0px solid rgba(0,0,0,0) !important;
      border-left: 1px solid rgba(0,0,0,.07) !important;
      border-radius: 0px !important;
    }
  }
</style>
