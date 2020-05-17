<template>
  <div style="display: flex;flex-wrap: wrap;justify-content: center; padding-top: 50px;">
    <challenge v-for="(item,index) in cList" :key="index" :cList1="item"></challenge>
  </div>
</template>
<script>
  import Challenge from "../Challenge";
  export default {
    components:{
      Challenge
    },
    data(){
      return{
        cList:[]
      }
    },
    created() {
      this.readData()
    },
    mounted() {
    },
    methods:{
      readData() {
        window.axios.post(
          `${process.env.VUE_APP_API_URL}getChallenges`,
          {

          }
        ).then(({data})=>{
          this.cList=data.result
          console.log('getchallengeslist',this.cList)
        })
      },
    }
  }
</script>
