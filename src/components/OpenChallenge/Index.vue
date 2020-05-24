<template>
  <div style="display: flex;flex-wrap: wrap;justify-content: center; padding-top: 50px;">
    <challenge v-for="(item,index) in cList" :key="index" :cList1="item"></challenge>
  </div>
</template>
<script>
  import Challenge from "../Challenge";
  import store from "../../store"
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
     
    }
  }
</script>
