<template>
  <div class="best-image-div">
    <LightGallery
      :images="dataset"
      :index="sel_index"
      :disable-scroll="true"
      @close="sel_index = null"
    />

    <StackGrid
      :columnWidth="gWidth"
      :gutterX="15"
      :gutterY="15"
      easing="easeOut"
    >
      <!-- you component like this -->
      <div class="stack-item"
           v-for="(item, index) in dataset" :key="index"
      >
        <div class="img_div">
          <img :src="item.url">
          <div class="img-hover">
            <div class="img-body">
              <div class="title">
                <div class="title-item left">
                  <span><i class="fas fa-vote-yea item-hover"></i></span><label style="margin-left: 5px;">29239</label>
                </div>
                <div class="title-item right">
                  <b-icon class="item-hover" icon="exclamation-octagon" scale="1.1" style="color:white; text-shadow: 0 0 3px #000000, 0 0 5px #000000;"></b-icon>
                </div>
              </div>
              <div class="title-item-top left">
                <b-icon class="item-hover" icon="heart" scale="1.1" style="color: white; text-shadow: 0 0 3px #000000, 0 0 5px #000000;"></b-icon>
              </div>
              <div class="title-item-top center">
                #{{index+1}}
              </div>
              <div @click="sel_index = index" class="title-item-top right">
                <b-icon class="item-hover" icon="search" scale="1.1" style="color: white; text-shadow: 0 0 3px #000000, 0 0 5px #000000;"></b-icon>
              </div>
              <div class="center-profile">
                <div class="center-container">
                  <div class="profile-img"></div>
                      URPIXPAYS.COM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StackGrid>
  </div>
</template>
<script>
  import StackGrid from 'vue-stack-grid-component'
  import images from './images'
  import { LightGallery } from 'vue-light-gallery';
  import AOS from 'aos';
  export default {
    name:'TopPhotos',
    components: { StackGrid,LightGallery},
    mounted() {
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });
    },
    created() {
      console.log(images)
      //this.dataset=images
      this.showMore()
      window.addEventListener('scroll', this.handleScroll);
      this.setInterval=setInterval(this.orderImgs,500);
    },
    beforeDestroy() {
      clearInterval(this.setInterval)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
      this.dataset=[]
    },
    data(){
      return{
        gWidth:300,
        images,
        dataset:[],
        isGettingImg:false,
        sel_index:null,
        setInterval:null
      }
    },
    methods:{
      showMore(){
        let dataLength=this.dataset.length
        console.log(this.dataset.length,images.length)
        if (dataLength===images.length || this.isGettingImg)return;
        this.isGettingImg=true
        console.log(dataLength)
        for (let index=0;index<images.length;index++){
          if (index>=dataLength && index<=dataLength+9){
            this.dataset.push(images[index])
          }
        }
        this.orderImgs()
      },
      orderImgs(){
        this.gWidth--
        this.gWidth++
        this.isGettingImg=false
      },
      rest(){

      },
      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        var scrollPos = window.scrollY
        var winHeight = window.innerHeight
        var docHeight = document.documentElement.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        if (perc>90 && this.isGettingImg==false){
          this.showMore()
        }
      }
    }
  }
</script>
<style scoped>
  .col-sm-6{
    padding: 0!important;
  }
  .title{
    background:none!important;
  }
  .title .title-item{
    width: 50%;
    font-size: 20px;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    padding-top: 10px;
  }
  .title .title-item.left{
    padding-left: 15px;
    text-align: left;
  }
  .title .title-item.left span{
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    font-size: 18px;
  }
  .title .title-item.right{
    text-align: right;
    padding-right: 15px;
    padding-top: 0px;
  }
  .title-item-top.left{
    text-align: left;
    width: 30%;
    float: left;
    padding-left: 20px;
    padding-top: 15px;
    font-size: 20px;
  }
  .title-item-top.right{
    text-align: right;
    width: 30%;
    float: right;
    padding-right: 20px;
    font-size: 20px;
    padding-top: 13px;
  }
  .title-item-top.center{
    width: 40%;
    float: left;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    color: white;
    font-size: 25px;
    padding-top: 15px;
  }
  .center-profile{
    display: table;
    width: 100%;
    height: calc(100% - 100px);
    position: absolute;
    margin-top: 50px;
  }
  .center-container{
    display: table-cell;
    vertical-align: middle;
    color: white;
    font-weight: 600;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
  }
  .profile-img{
    width: 100px;
    height: 100px;
    margin:auto;
    border-radius: 50%;
    text-align: center;
    font-weight: 600;
    background-image: url('https://urpixpays.com/public/uploads/challengesimages/439dragonfly-1122445_1920.jpg');
    background-size: cover;
    background-position: center;
    border: 2px solid white;
    box-shadow: 0 0 15px 0 rgba(109,124,158,0.98);
  }
  .item-hover{
    cursor: pointer;
  }
</style>
