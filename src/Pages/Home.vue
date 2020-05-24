<template>
  <div>
    <vs-tabs alignment="center" :color="'#3c8bdd'">
      <vs-tab label="My Challenges">
        <div>
          <vs-tabs alignment="fixed" :color="'#3c8bdd'">
            <vs-tab label="Current">
              <my-challenge></my-challenge>
            </vs-tab>
            <vs-tab label="Past">
              <past-challenges></past-challenges>
            </vs-tab>
          </vs-tabs>
        </div>
      </vs-tab>
      <vs-tab label="Open Challenges">
        <open-challenge></open-challenge>
      </vs-tab>
      <vs-tab label="Closed Challenges">
        <closed-challenge></closed-challenge>
      </vs-tab>

    </vs-tabs>
  </div>
</template>
<script>
  import MyChallenge from'../components/MyChallenge/Index'
  import PastChallenges from "../components/MyChallenge/PastChallenges";
  import OpenChallenge from '../components/OpenChallenge/Index'
  import ClosedChallenge from '../components/ClosedChallenge/Index'
  export default {
    components:{
      MyChallenge,PastChallenges,OpenChallenge,ClosedChallenge
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    created(){
      this.readData()
    },
    methods: {
      linkClass(idx) {
        /* if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        } */
      },
      readData() {
        window.axios.post(
          `${process.env.VUE_APP_API_URL}getMyJoinChallenge`,
          {
              uid:store.state.userData.auth.uid
          }
        ).then(({data})=>{
          console.log('getMyJoinChallenge',data.result)
        })
    },
    }
  }
</script>
<style>

</style>
