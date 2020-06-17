<template>
  <div>
    <vs-tabs alignment="center" :color="'#3c8bdd'" v-if="!isLoading">
      <vs-tab label="My Challenges">
        <div>
          <vs-tabs alignment="fixed" :color="'#3c8bdd'">
            <vs-tab label="Current">
              <my-challenge :gCList="myChannlges.myCList||[]" :key="myChannlges.myCList.length"/>
            </vs-tab>
            <vs-tab label="Past">
              <past-challenges></past-challenges>
            </vs-tab>
          </vs-tabs>
        </div>
      </vs-tab>
      <vs-tab label="Open Challenges">
        <open-challenge :gCList="myChannlges.openCList||[]" @joined="JoinChallenge" :key="myChannlges.openCList.length"/>
      </vs-tab>
      <vs-tab label="Closed Challenges">
        <closed-challenge></closed-challenge>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
<script>
import MyChallenge from "../components/MyChallenge/Index";
import PastChallenges from "../components/MyChallenge/PastChallenges";
import OpenChallenge from "../components/OpenChallenge/Index";
import ClosedChallenge from "../components/ClosedChallenge/Index";
import store from "../store";
export default {
  components: {
    MyChallenge,
    PastChallenges,
    OpenChallenge,
    ClosedChallenge
  },
  data() {
    return {
      tabIndex: 0,
      myChannlges: {},
      isLoading:true
    };
  },
  created() {
    this.readData();
    // this.readData()
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
      this.isLoading=true
      window.axios.post(`${process.env.VUE_APP_API_URL}getMyJoinChallenge`, {
        uid: store.state.userData.auth.uid
      })
        .then(({ data }) => {
          this.myChannlges = data.result;
          console.log("getMyJoinChallenge", data.result);
          this.isLoading=false

        });
    },
    JoinChallenge(c_id){
      let index=this.myChannlges.openCList.findIndex(item=>item._id===c_id)
      console.log(c_id,index)
      this.myChannlges.myCList.unshift(this.myChannlges.openCList[index])
      this.myChannlges.openCList.splice(index,1)
    },
  }
};
</script>
<style>
</style>
