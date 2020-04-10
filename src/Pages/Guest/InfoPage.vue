<template>
  <div class="infoPage">
    <b-row >
        <b-col lg="6" v-for="(item,index) in dataList" style="margin-bottom: 20px;">
          <div class="title text-content" data-aos="fade-right">
            <h3>{{item.title}}</h3>
            <img v-bind:src="item.url" width="100%">
            <h6>{{item.content}}</h6>
          </div>
        </b-col>
    </b-row>
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
  .infoPage{
    padding-bottom: 20px;
  }
  .text-content{
    border:1px solid lightgray;
    margin-top: 20px;
    padding: 20px;
    float: left;
    border-radius: 5px;
    border-bottom: 3px solid #3c95ac;
    box-shadow: 0 4px 15px 0 rgba(0,0,0,0.5) !important;
  }
  .text-content h3{
    font-size: 17px;
    text-align: left;
    font-weight: 600;
    color: #3c95ac;
  }
  .text-content h6{
    text-align: left;
  }
  .text-content img{
    width: 30%;
    float: left;
    margin-right: 10px;
  }
  @media screen and (max-width: 576px) {
    .text-content h3{
      font-size: 4vw;
    }
  }
</style>
