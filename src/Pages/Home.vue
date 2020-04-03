<template>
  <div>
    <vs-tabs alignment="center" :color="'#3c8bdd'">
      <vs-tab label="My Challenges">
        <div>
          <vs-tabs alignment="fixed" :color="'#3c8bdd'">
            <vs-tab label="Current">
              <open-challenge></open-challenge>
            </vs-tab>
            <vs-tab label="Past">
              <div>
                test
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </vs-tab>
      <vs-tab label="Open Challenges">
        <div>
          test
        </div>
      </vs-tab>
      <vs-tab label="Closed Challenges">
        <div>
          test
        </div>
      </vs-tab>

    </vs-tabs>
  </div>
</template>
<script>
  import OpenChallenge from'../components/OpenChallenge'
  export default {
    components:{
      OpenChallenge
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass(idx) {
        // if (this.tabIndex === idx) {
        //   return ['bg-primary', 'text-light']
        // } else {
        //   return ['bg-light', 'text-info']
        // }
      }
    }
  }
</script>
<style>

</style>
