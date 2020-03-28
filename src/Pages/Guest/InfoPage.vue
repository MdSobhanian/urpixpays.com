<template>
  <div class="infoPage">
    <div v-for="(item,index) in dataList" :class="index%2==1?'invert':''">
      <b-row >
        <b-col sm="6">
          <div class="title" data-aos="fade-right">
            <div class="font1">
              <h3>{{item.title}}</h3>
              <h6>{{item.content}}</h6>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="video_div" data-aos="fade-left">
            <img v-bind:src="item.url" width="100%">
          </div>
        </b-col>
      </b-row>
      <!--<b-row v-else class="invert">
        <b-col sm="6">
          <div class="video_div" data-aos="fade-right">
            <img :src="item.url" width="100%">
          </div>
        </b-col>
        <b-col sm="6">
          <div class="title" data-aos="fade-left">
            <div class="font1">
              <h3>{{item.title}}</h3>
              <h6>{{item.content}}</h6>
            </div>
          </div>
        </b-col>
      </b-row>-->
    </div>

  </div>

</template>
<script>
  import AOS from 'aos';
  import infoPageData from "./infoPageData";

  export default {
    mounted() {
      //this.$refs.videoRef.src = "";
      AOS.init({
        easing: 'ease-out-back',
        duration: 500
      });

    },
    created() {
      this.readData()
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
      this.dataList=[]
    },
    data() {
      return {
        infoPageData,
        dataList:[],
        isLoading:true
      }
    },
    methods: {

      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        var scrollPos = window.scrollY
        var winHeight = window.innerHeight
        var docHeight = document.documentElement.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        //console.log(perc)
        if (perc>90 && this.isLoading==false){
          this.readData()
        }
      },
      readData(){
        this.isLoading=true
        let dataLength=this.dataList.length
        if (dataLength===infoPageData.length)return;
        console.log(dataLength)
        for (let index=0;index<infoPageData.length;index++){
          if (index>=dataLength && index<=dataLength+2){
            this.dataList.push(infoPageData[index])
          }
        }
        this.isLoading=false
        //console.log(this.dataList)
      }
    }
  }
</script>
<style scoped>
  .col-sm-6 {
    padding: 0 !important;
  }
</style>
