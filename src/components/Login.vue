<template>
  <div>
    <b-button block style="background-color: #3B5998" @click="loginWithFacebook">
      <i class="fab fa-facebook"></i> Login with Facebook
    </b-button>
<!--    <b-button block style="background-color: #dd4b39">-->
<!--      <i class="fab fa-instagram"></i> Login with Instagram-->
<!--    </b-button>-->
    <b-form @submit.prevent="submit">
      <div style="text-align: center;padding: 10px"> Or sign in manually:
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <div v-if="error1" class="alert alert-danger">{{error1}} send like to {{form.email}}</div>
      <b-form-group>
        <b-input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autocomplete="username email"
          v-model="form.email"

        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <b-input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          autocomplete="curent-password"
          v-model="form.password"
        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <div style="text-align: center">
          <b-button type="submit" variant="primary">Login</b-button>
          <b-button @click="$emit('cancel')" variant="danger">Cancel</b-button>
        </div>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  import firebase from "firebase";
  import store from "../store";
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: "",
          password: ""
        },
        error: null,
        error1: null,
        loginUser: {
          email: "",
          name:"",
          // birthday:"",
          photoURL:'',
          created_at:''
        },
      };
    },
    methods: {
      loginWithFacebook() {
        console.log('facebook login')
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
          'display': 'popup'
        });
        let self=this
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user
          var profile=result.additionalUserInfo.profile
          console.log('testing',profile)

          self.loginUser.name=profile.name;
          self.loginUser.email=profile.email;
          // self.loginUser.birthday=profile.birthday;
          self.loginUser.photoURL=user.photoURL;
          self.loginUser.uid=user.uid
          console.log(self.loginUser)
          firebase.firestore().collection('users').doc(user.uid).set(self.loginUser, { merge: true }).then((res)=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          console.log('from facebook',result)
          self.$router.push('/home');
          // self.$router.push({name:'Dashboard'})
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(error)
          self.error=error.message
          // ...
        });
      },
      submit() {
        // Event.$emit('isLoad',true)
        let self=this
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            console.log(firebase.auth().currentUser)
            /*if (firebase.auth().currentUser.emailVerified==false){
              this.error1 = "Your account does not verified yet."
              return
            }*/
            console.log('logincheck')
            window.axios.post(`${process.env.VUE_APP_API_URL}getUser`,{uid:firebase.auth().currentUser.uid}).then(({data})=>{
              if (data.state==-1){
                this.$vs.notify(data.notify)
                firebase.auth().signOut()
              }
              store.state.userData= data.result
              console.log('logincheck000',data.result)
              //self.setUser({auth:firebase.auth().currentUser,info:account})
              self.$router.push('/home');
            })

          })
          .catch(err => {
            this.error = err.message;
          });
      },
      setUser(data){
        window.axios.post('https://13.233.42.88:3000/setUser',{collection:'users',data:data}).then(({data})=>{
        })
      },
      emailLink(email){
        let self=this
        console.log('firebase.auth().currentUser',firebase.auth().currentUser)
        firebase.auth().currentUser.sendEmailVerification()
          .then(function() {
            // Verification email sent.
            //self.makeToast('success','Sign Up','Please check verification link in your mail box');
            self.$vs.notify({
              color:'warning',
              title:'Authentication Warning',
              text:'Please check verification link in your mail box'
            })
            self.$emit('cancel')
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
            //self.makeToast('warning','Sign Up','OOP! Please try later');
            self.$vs.notify({
              color:'warning',
              title:'Authentication Warning',
              text:'OOP! Please try later'
            })
          });
      },
    }
  }

</script>
