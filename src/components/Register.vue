<template>
  <div>
   <!-- <b-button block style="background-color: #3B5998" @click="loginWithFacebook">
      <i class="fab fa-facebook"></i> Sign Up with Facebook
    </b-button>-->
<!--    <b-button block style="background-color: #dd4b39">-->
<!--      <i class="fab fa-instagram"></i> Register with Instagram-->
<!--    </b-button>-->
    <b-form @submit.prevent="submit">
      <!--<div style="text-align: center;padding: 10px"> Or Sign Up in manually:
      </div>-->
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <b-form-group>
        <b-input
          type="text"
          placeholder="Full Name"
          name="name"
          v-model="form.name"
          required
        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <b-input
          name="email"
          type="email"
          placeholder="Email"
          v-model="form.email"
          required
        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <b-input
          name="phone"
          type="number"
          placeholder="Phone"
          v-model="form.phone"
          required
        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <b-form-datepicker v-model="form.birthday" placeholder="Your Birthday" :max="getMaxDate()" aria-required="true"></b-form-datepicker>
      </b-form-group>
      <b-form-group>
        <div style="display: flex">
          <country-select class="form-control" v-model="form.country" :country="form.country" topCountry="US" required />
          <region-select class="form-control" v-model="form.region" :country="form.country" :region="form.region" required />
        </div>
      </b-form-group>
      <b-form-group>
        <b-input
          placeholder="Password"
          type="password"
          name="password"
          v-model="password"
          required
        >
        </b-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox
          id="checkbox-1"
          v-model="form.isAcceptTerms"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          required
        >
          I accept the <b-link v-bind:to="'teams'">terms and conditions</b-link>
        </b-form-checkbox>
      </b-form-group>
      <b-form-group>
        <vue-recaptcha sitekey="6Lddm-UUAAAAADVChYW70JaornlKSa_S9yqALLA-" :loadRecaptchaScript="true" @verify="robotChecked" required>
        </vue-recaptcha>
        <div v-if="recaptchaErr" class="alert alert-danger">{{recaptchaErr}}</div>
      </b-form-group>
      <b-form-group>
        <div style="text-align: center">
          <b-button type="submit" variant="primary">Sign Up</b-button>
          <b-button @click="$emit('cancel')" variant="danger">Cancel</b-button>
<!--          <b-button @click="emailLink('tolrenfrank1014@gmail.com')" variant="danger">test</b-button>-->
        </div>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  import firebase from "firebase";
  import csc from 'country-state-city'
  import VueRecaptcha from 'vue-recaptcha';

  export default {
    components: { VueRecaptcha },
    name: 'Login',
    data() {
      return {
        form: {
          email: "",
          name:"",
          birthday:"",
          country:'',
          region:'',
          isAcceptTerms:false,
          phone:''
        },
        password: "",
        recaptchaErr:'',
        isRecaptcha:false,
        error: null
      };
    },
    methods: {
      test(){
        this.makeToast('success','testing','testing');
      },

      robotChecked(res){
        console.log('not robot',res)
        this.recaptchaErr=''
        this.isRecaptcha=true
      },
      getMaxDate(){
        let thisYear=new Date();
        thisYear.setFullYear(thisYear.getFullYear()-19);
        thisYear.setMonth(11)
        thisYear.setDate(31)
        // console.log(thisYear)
        return thisYear
      },
      loginWithFacebook() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user
          console.log(result)
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      },
      submit() {
        // if (!this.isRecaptcha){
        //   this.recaptchaErr='Please check robot'
        //   return
        // }
        let self=this
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.password).then(res=>{
          console.log('success',res)
          // /firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(this.form)
          self.setUser({auth:firebase.auth().currentUser,info:this.form})
          self.emailLink(res)
        }).catch((error)=> {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          this.error=errorMessage
          this.emailLink(self.form.email)
          console.log(error)
          self.makeToast('warning','Sign Up','OOP! Please try later');
        });
      },
      setUser(data){
        window.axios.post(`${process.env.VUE_APP_API_URL}setUser`,{collection:'users',data:data}).then(({data})=>{
        })
      },
      emailLink(email){
        let self=this
        console.log('firebase.auth().currentUser',firebase.auth().currentUser)
        firebase.auth().currentUser.sendEmailVerification()
          .then(function() {
            // Verification email sent.
            self.makeToast('success','Sign Up','Please check verification link in your mail box');
            self.$emit('cancel')
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
            self.makeToast('warning','Sign Up','OOP! Please try later');
          });
      },
      makeToast(variant = null, title, body) {
        const h = this.$createElement
        // Increment the toast count
        this.count++
        // Create the message
        const vNodesMsg = h(
          'p',
          {class: ['text-center', 'mb-0']},
          [
            h('b-spinner', {props: {type: 'grow', small: true}}),
            ' ',
            body,
            ` `,
            h('b-spinner', {props: {type: 'grow', small: true}})
          ]
        )
        // Create the title
        const vNodesTitle = h(
          'div',
          {class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2']},
          [
            h('strong', {class: 'mr-2'}, 'The Title'),
            h('small', {class: 'ml-auto text-italics'}, '5 minutes ago')
          ]
        )

        this.$bvToast.toast([vNodesMsg], {
          title: title,
          variant: variant,
          solid: false,
          toaster: 'b-toaster-bottom-right',
        })
      }
    },
    created() {
      console.log('countries',csc.getAllCountries())
    }
  }

</script>
