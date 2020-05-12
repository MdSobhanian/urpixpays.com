<template>
  <div class="current" style="overflow-y: auto;height: calc(100vh - 300px);" v-on:scroll="handleScroll">
    <challenge-header></challenge-header>
    <!--    <b-button @click="test">test</b-button>-->
    <div style="padding: 10px 0 0 0;margin: 10px 0 0 0; display: flex;flex-wrap: wrap;" >
      <challenge-item v-for="item in cList" :key="item.c_id" :c-data="item" status="past"></challenge-item>
    </div>
  </div>
</template>
<script>
  import ChallengeHeader from './ChallengeHeader'
  import ChallengeItem from './ChallengeItem'
  import mychallengedata from "./mychallengedata";
  import images from "../../Pages/Guest/images";
  import AOS from "aos";
  export default {
    components:{
      ChallengeHeader,ChallengeItem
    },
    data(){
      return{
        mychallengedata,
        cList:[],isGettingData:false
      }
    },
    created() {
      this.showMore()
    },
    mounted() {
      //this.$refs.videoRef.src = "";
      /*AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });*/

    },
    methods:{
      test(){
        this.cList[0].c_name='changed'
        console.log(this.cList[0])
      },
      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        //console.log(event)
        //return
        var scrollPos = event.target.scrollTop
        var winHeight = event.target.clientHeight
        var docHeight = event.target.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        // console.log(perc)
        if (perc>90 && this.isGettingData==false){
          this.showMore()
        }
      },
      showMore(){
        let dataLength=this.cList.length
        //console.log(this.dataset.length,images.length)
        if (dataLength===mychallengedata.length || this.isGettingData)return;
        this.isGettingData=true
        //console.log(dataLength)
        for (let index=0;index<mychallengedata.length;index++){
          if (index>=dataLength && index<=dataLength+1){
            this.cList.push(mychallengedata[index])
          }
        }
        AOS.init({
          easing: 'ease-out-back',
          duration: 1000
        });
        this.isGettingData=false
      },
    }
  }
</script>
